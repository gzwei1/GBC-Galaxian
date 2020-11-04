import React, { Component } from "react";
import CanvasBg from "./canvas/canvasbg";
import CanvasShip from "./canvas/canvasship";
import CanvasBullet from "./canvas/canvasbullet";
import CanvasEnemy from "./canvas/canvasenemy";

class Animation extends Component {
  constructor(props) {
    super(props);
    //canvas size, fixed
    this.width = 600;
    this.height = 400;
    this.keyState = {};
    this.bulletstatus = 1;
    // this.enemyXb = 60;  use prop
    // this.enemyYb = 90;
    // this.enemyXd = 40;
    // this.enemyYd = 20;
    const { enemyXb, enemyYb, enemyXd, enemyYd } = this.props;
    //element state
    this.state = {
      bgy: 0,
      shipx: 285, //(600-30(ship length))/2
      bulletx: 299, //285+28/2-1 = 298
      bullety: 353, //400-12(length to bottm)-28(ship height)-7(bullet height) = 353
      
      enemies: [
        { x: enemyXb, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 2 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
        { x: enemyXb + 2 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 2 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 2 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 2 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 3 * enemyXd, y2: enemyYb + 0 * enemyYd, status: 1 },
        { x: enemyXb + 3 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
        { x: enemyXb + 3 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 3 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 3 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 3 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 4 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
        { x: enemyXb + 4 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 4 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 4 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 4 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 5 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
        { x: enemyXb + 5 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 5 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 5 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 5 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 6 * enemyXd, y2: enemyYb + 0 * enemyYd, status: 1 },
        { x: enemyXb + 6 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
        { x: enemyXb + 6 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 6 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 6 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 6 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 7 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
        { x: enemyXb + 7 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 7 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 7 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 7 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 8 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
        { x: enemyXb + 8 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 8 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 8 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

        { x: enemyXb + 9 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
        { x: enemyXb + 9 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
        { x: enemyXb + 9 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },
      ],
      //curretly const, will change to variable '
      enemyDirection: "right",
      enemyDirectionCounter: 0,
    };
  }

  componentDidMount() {
    window.resizeTo(250, 250);
    this.bgmove(); // requestAnimationFrame(this.bgmove) no error, why?
    // console.log('keystate',this.keyState);
    window.addEventListener("keydown", (e) => {
      this.keyState[e.code] = true;
    });
    window.addEventListener("keyup", (e) => {
      this.keyState[e.code] = false;
    });
    this.shipLoop();

    window.addEventListener("keydown", this.bulletloop);

    this.enemymove();

    this.gameover();
  }

  gameover = () => {
    const over = this.state.enemies.filter((enemy) => {
      return enemy.status === 1;
    });
    if (over.length === 0) {
      const { enemyXb, enemyYb, enemyXd, enemyYd } = this.props;
      setTimeout(() => {
        this.setState({
          bgy: 0,
          shipx: this.state.shipx, //(600-30(ship length))/2
          bulletx: this.state.bulletx, //285+28/2-1 = 298
          bullety: 353, //400-12(length to bottm)-28(ship height)-7(bullet height) = 353
         
          enemies: [
            { x: enemyXb, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 2 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
            { x: enemyXb + 2 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 2 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 2 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 2 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 3 * enemyXd, y2: enemyYb + 0 * enemyYd, status: 1 },
            { x: enemyXb + 3 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
            { x: enemyXb + 3 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 3 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 3 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 3 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 4 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
            { x: enemyXb + 4 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 4 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 4 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 4 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 5 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
            { x: enemyXb + 5 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 5 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 5 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 5 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 6 * enemyXd, y2: enemyYb + 0 * enemyYd, status: 1 },
            { x: enemyXb + 6 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
            { x: enemyXb + 6 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 6 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 6 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 6 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 7 * enemyXd, y2: enemyYb + 1 * enemyYd, status: 1 },
            { x: enemyXb + 7 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 7 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 7 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 7 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 8 * enemyXd, y2: enemyYb + 2 * enemyYd, status: 1 },
            { x: enemyXb + 8 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 8 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 8 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },

            { x: enemyXb + 9 * enemyXd, y2: enemyYb + 3 * enemyYd, status: 1 },
            { x: enemyXb + 9 * enemyXd, y2: enemyYb + 4 * enemyYd, status: 1 },
            { x: enemyXb + 9 * enemyXd, y2: enemyYb + 5 * enemyYd, status: 1 },
          ],
          //curretly const, will change to variable '
          enemyDirection: "right",
          enemyDirectionCounter: 0,
        });
      }, 1000);
    }
    requestAnimationFrame(this.gameover);
  };
  //bullet y-axis moving
  //to be solved: keyoverride
  bulletloop = (e) => {
    const collisionDetect = () => {
      this.setState((prevState, prevProps) => {
        const newState = prevState.enemies.slice();
        prevState.enemies.forEach((enemy, id) => {
          if (
            enemy.y2 === prevState.bullety -3 &&
            prevState.bulletx > enemy.x &&
            prevState.bulletx < enemy.x + 27 &&
            enemy.status !== 2
          ) {
            newState[id] = { x: enemy.x, y2: enemy.y2, status: 2 };
            this.bulletstatus = 2;
          }
        });

        return { enemies: newState };
      });
    };
   
    //alert('bulletloop')
    if (e.keyCode === 32) {
      window.removeEventListener("keydown", this.bulletloop);

      collisionDetect();
      if (this.bulletstatus === 1) {
        this.setState((prevState, prevProps) => {
          let by = prevState.bullety - 5;
          if (by < -8) {
            by = 353;
            window.addEventListener("keydown", this.bulletloop);
            return { bulletx: prevState.shipx + 14, bullety: by };
          } else {
            requestAnimationFrame(this.bulletloop.bind(this, e));
            return { bullety: by };
          }
        });
      } else {
        this.setState({ bullety: 353 ,bulletx:this.state.shipx+14});
          this.bulletstatus=1;
          window.addEventListener("keydown", this.bulletloop);
        
      }
    }

    //set state with previous state: use callback↑
    /*  let by = this.state.bullety - 5;
         if (by < -8){
         by = 353; 
         this.setState((prevState,prevProps)=>{
           return {bulletx:prevState.shipx + 14, bullety: by}
         });
         window.addEventListener('keydown', this.bulletloop) 
         return;
         }
         this.setState({bullety: by});
        } */
  };

  //ship and bullet x-axis moving
  shipLoop = () => {
    if (this.keyState["ArrowLeft"] || this.keyState["KeyA"]) {
      //  alert('shiploop')
      this.setState((prevState, prevProps) => {
        let sx = prevState.shipx - 2;
        if (sx < 0) {
          sx = 0;
        }
        if (prevState.bullety === 353) {
          let bx = prevState.bulletx - 2;
          if (bx < 14) {
            bx = 14;
          }
          return {
            bulletx: bx,
            shipx: sx,
          };
        }
        return { shipx: sx };
      });
    }

    //   let sx = this.state.shipx - 2;
    //   if(sx < 0){sx = 0}
    //   if(this.state.bullety === 353){
    //   let bx = this.state.bulletx - 2;
    //     if(bx < 14){bx = 14}
    //     this.setState({bulletx : bx});
    //   }
    //   this.setState({shipx : sx});
    //  }
    if (this.keyState["ArrowRight"] || this.keyState["KeyD"]) {
      //  alert('shiploop')
      this.setState((prevState, prevProps) => {
        let sx = prevState.shipx + 2;
        if (sx > 570) {
          sx = 570;
        }
        if (prevState.bullety === 353) {
          let bx = prevState.bulletx + 2;
          if (bx > 584) {
            bx = 584;
          }
          return {
            bulletx: bx,
            shipx: sx,
          };
        }
        return { shipx: sx };
      });
    }
    //warp bullet logic like this does not work.
    /* if (this.keyState[32]){
      let by = this.state.bullety - 5;
      if (by < 0){
        by = 353;
      }
      this.setState({bullety: by});
    }*/
    /// redraw/reposition your object here
    /// also redraw/animate any objects not controlled by the user
    requestAnimationFrame(this.shipLoop);
  };

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

  enemymove = () => {
    setTimeout(this.enemymove, 500);
    if (this.state.enemyDirection === "right") {
      this.setState((prevState, prevProps) => {
        const newState = [];

        //enemy has to be entered as a parameter for id to be accepted correctly ↓
        prevState.enemies.forEach((enemy, id) => {
          let obj = {
            x: enemy.x + this.props.enemySpeed,
            y2: enemy.y2,
            status: enemy.status,
          };

          newState.push(obj);
        });
        if (prevState.enemyDirectionCounter === 9) {
          return {
            enemies: newState,
            enemyDirectionCounter: 0,
            enemyDirection: "left",
          };
        }
        return {
          enemies: newState,
          enemyDirectionCounter: prevState.enemyDirectionCounter + 1,
        };
      });
    }

    if (this.state.enemyDirection === "left") {
      this.setState((prevState, prevProps) => {
        const newState = [];

        //enemy has to be entered as a parameter for id to be accepted correctly ↓
        prevState.enemies.forEach((enemy, id) => {
          let obj = {
            x: enemy.x - this.props.enemySpeed,
            y2: enemy.y2,
            status: enemy.status,
          };

          newState.push(obj);
        });
        if (prevState.enemyDirectionCounter === 9) {
          return {
            enemies: newState,
            enemyDirectionCounter: 0,
            enemyDirection: "right",
          };
        }
        return {
          enemies: newState,
          enemyDirectionCounter: prevState.enemyDirectionCounter + 1,
        };
      });
    }
  };

  bgmove = () => {
    // console.log("[bgy]",this.state.bgy)
    this.setState((prevState, prevProps) => {
      let y = prevState.bgy + 1; //speed = 1
      if (y > 400) {
        y = 0;
      }
      return { bgy: y };
    });
    //https://riptutorial.com/javascript/example/1956/recursive-settimeout
    requestAnimationFrame(this.bgmove);
  };

  render() {
    // console.log(this.state.enemies)
    return (
      <div>
        <CanvasBg
          width={this.width}
          height={this.height}
          //bg vertial: fixed = 0
          x={0}
          y={this.state.bgy}
        />
        <CanvasShip
          width={this.width}
          height={this.height}
          x={this.state.shipx}
          //ship vertical: fixed = 360
          y={360}
        />
        <CanvasBullet
          width={this.width}
          height={this.height}
          x={this.state.bulletx}
          y={this.state.bullety}
          status={this.bulletstatus}
        />
        <CanvasEnemy
          width={this.width}
          height={this.height}
          enemies={this.state.enemies}
          enemyspeed={this.props.enemySpeed}
        />
      </div>
    );
  }
}

export default Animation;
