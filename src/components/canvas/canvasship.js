import React, { Component } from "react";
import PureCanvas from "./purecanvas";
import shipimg from "../images/ship.jpg";

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
    const { width, height, x, y } = this.props;
    const context = this.canvasRef.current.getContext("2d");
    //   console.log('ship')
    const shipimage = new Image();
    shipimage.src = shipimg;
    shipimage.onload = () => {
      //   console.log(shipimage)
      context.drawImage(shipimage, x, y, 30, 28);
      context.clearRect(x - 30, y, 30, 28);
      context.clearRect(x + 30, y, 30, 28);
    };
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
