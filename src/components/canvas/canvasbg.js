import React, { Component } from "react";
import PureCanvas from "./purecanvas";
import bgimg from "../images/background.jpg";

//https://www.youtube.com/watch?v=YkPyedMS6s4
//https://www.youtube.com/watch?reload=9&v=3GqUM4mEYKA

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
    const bgimage = new Image();
    bgimage.src = bgimg;
    //https://webplatform.github.io/docs/concepts/programming/drawing_images_onto_canvas/
    //https://stackoverflow.com/questions/15048279/drawimage-not-working
    bgimage.onload = () => {
      // console.log(bgimage)
      context.drawImage(bgimage, 0, y, 600, 400);
      context.drawImage(bgimage, 0, y - 400, 600, 400);
    };

    // context.fillRect(0,100,100,100)
  }

  render() {
    const { width, height } = this.props;
    return (
      <canvas
        ref={this.canvasRef}
        width={width}
        height={height}
        style={{ zIndex: -10, position: "fixed", top: 0, left: 0 }}
      />
    );
  }
}

export default CanvasBg;
