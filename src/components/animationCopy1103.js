import React, { Component } from 'react';
import CanvasBg from './canvas/canvasbg';
import CanvasShip from './canvas/canvasship';
import CanvasBullet  from './canvas/canvasbullet'

class Animation extends Component {
    constructor(props) {
      super(props);
      //canvas size, fixed 
        this.width = 600;
        this.height = 400;
        this.keyState = {};
      //element state
        this.state = { 
          bgy: 0,
          shipx:285,   //(600-30(ship length))/2
          bulletx:299, //285+28/2-1 = 298 
          bullety:353, //400-12(length to bottm)-28(ship height)-7(bullet height) = 353
        };
    
    }
    
    componentDidMount() {
       
      this.bgmove();   // requestAnimationFrame(this.bgmove) no error, why? 
      // console.log('keystate',this.keyState);   
      window.addEventListener('keydown',e=>{
      this.keyState[e.keyCode || e.which] = true;
      });    
      window.addEventListener('keyup',e=>{
      this.keyState[e.keyCode || e.which] = false;
      }); 
      this.shipLoop();
      window.addEventListener('keydown', this.bulletloop) 
      }
    

    //bullet y-axis moving 
    bulletloop = e => {  
      
       if (e.keyCode === 32){
        window.removeEventListener('keydown', this.bulletloop) 
        let by = this.state.bullety - 5;
        
         if (by < -8){
         by = 353;
         let bx = this.state.shipx + 14
         this.setState({bulletx:bx, bullety: by});
         window.addEventListener('keydown', this.bulletloop) 
         return;
         }
         this.setState({bullety: by});
         
         
        }
        
        requestAnimationFrame(this.bulletloop.bind(this,e));
        }
    
    //ship and bullet x-axis moving 
    shipLoop = () => {
      if (this.keyState[37]){
        let sx = this.state.shipx - 2;
        if(sx < 0){sx = 0}
        if(this.state.bullety === 353){
        let bx = this.state.bulletx - 2;
          if(bx < 14){bx = 14}
        this.setState({bulletx : bx});
        }
        this.setState({shipx : sx});
       }    
      if (this.keyState[39]){
        let sx = this.state.shipx + 2;
        if(sx > 570){sx = 570}
        if(this.state.bullety === 353){
        let bx = this.state.bulletx + 2;
        if(bx > 584){bx = 584}
        this.setState({bulletx : bx});
      }
        this.setState({shipx : sx});
      }
      // if (this.keyState[32]){
      //   let by = this.state.bullety - 5;
      //   if (by < 0){
      //     by = 353;
      //   }
      //   this.setState({bullety: by});
      // }
    /// redraw/reposition your object here
    /// also redraw/animate any objects not controlled by the user
    requestAnimationFrame(this.shipLoop);
    }

//lagging--- need to use shiploop↑
//https://stackoverflow.com/questions/12273451/how-to-fix-delay-in-javascript-keydown
    // keyStrokeHandler = (e) => {
    //   if(e.keyCode==37){
    //     let x = this.state.shipx - 3;
    //     this.setState({shipx : x});
    //   }
    //   if(e.keyCode==40){
    //     let x = this.state.shipx + 3;
    //     this.setState({shipx : x});
    //   }    
    // }



    //to be modified
    bgmove = () => {
      // console.log("[bgy]",this.state.bgy)
      let y = this.state.bgy + 1 ; //speed = 1
      if ( y > 400 ){ y = 0 };
      this.setState({bgy : y });
      //https://riptutorial.com/javascript/example/1956/recursive-settimeout
      requestAnimationFrame(this.bgmove);
     
    }
    
  
    
  
    render() {
     
      return ( 
      <div> 
      <CanvasBg  
      width={this.width} 
      height={this.height}
      //bg vertial: fixed = 0  
      x={0} 
      y={this.state.bgy}/>
      <CanvasShip  
      width={this.width} 
      height={this.height} 
      x={this.state.shipx} 
      //ship vertical: fixed = 360
      y={360}  />
      <CanvasBullet  
      width={this.width} 
      height={this.height} 
      x={this.state.bulletx} 
      y={this.state.bullety} 
      />
      </div>
      )
    }
  }

  export default Animation;