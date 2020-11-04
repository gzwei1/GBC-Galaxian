import React, { Component } from "react";
import PureCanvas from "./purecanvas";
import bulletimg from "../images/bullet.jpg";

class CanvasBg extends Component {
  constructor(props) {
    super(props);
    this.paint = this.paint.bind(this);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {
    const { width, height, x, y ,status} = this.props;
    const context = this.canvasRef.current.getContext("2d");
     
    //   console.log('bullet')
    const bulletimage = new Image();
    bulletimage.src = bulletimg;
    bulletimage.onload = () => {
      //   console.log(bulletimage)
      if (status ===1 ){
      context.drawImage(bulletimage, x, y, 2, 7);
      context.clearRect(x - 2, y, 2, 7);
      context.clearRect(x + 2, y, 2, 7);
      context.clearRect(x, y + 7, 600, 9);
    };
    if (status ===2){
      context.clearRect(x, y, 3, 8);
    }
    }
    // context.fillRect(0,0,100,100)
  }

  render() {
    const { width, height, x, y } = this.props;
    return (
      <canvas
        ref={this.canvasRef}
        width={width}
        height={height}
        style={{ zIndex: 0, position: "fixed", top: 0, left: 0 }}
      />
    );
  }
}

export default CanvasBg;
