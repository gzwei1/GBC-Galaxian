import React, { Component } from "react";
import PureCanvas from "./purecanvas";
import green1img from "../images/green1.jpg";
import green2img from "../images/green2.jpg";
import green3img from "../images/green3.jpg";
import purple1img from "../images/purple1.jpg";
import purple2img from "../images/purple2.jpg";
import purple3img from "../images/purple3.jpg";
import red1img from "../images/red1.jpg";
import red2img from "../images/red2.jpg";
import red3img from "../images/red3.jpg";
import bossimg from "../images/boss.jpg";

class CanvasEnemy extends Component {
  constructor(props) {
    super(props);
    this.paint = this.paint.bind(this);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {
    const { width, height, enemies, enemyspeed } = this.props;

    const context = this.canvasRef.current.getContext("2d");
    //   console.log('bullet')
    const green1image = new Image();
    const green2image = new Image();
    const green3image = new Image();
    green1image.src = green1img;
    green2image.src = green2img;
    green3image.src = green3img;
    const purple1image = new Image();
    const purple2image = new Image();
    const purple3image = new Image();
    purple1image.src = purple1img;
    purple2image.src = purple2img;
    purple3image.src = purple3img;
    const red1image = new Image();
    const red2image = new Image();
    const red3image = new Image();
    red1image.src = red1img;
    red2image.src = red2img;
    red3image.src = red3img;
    const bossimage = new Image();
    bossimage.src = bossimg;

    green1image.onload = () => {
      
      const enemyXb = 70;
      const enemyYb = enemies[12].y2;
      const enemyXd = enemies[3].x - enemies[0].x;
      const enemyYd = enemies[1].y2 - enemies[0].y2;
    //   alert(enemyXb + "" + enemyYb + enemyXd + enemyYd);
      enemies.forEach((enemy) => {
        context.clearRect(enemy.x - enemyspeed, enemy.y2, 27, 14);
        context.clearRect(enemy.x + enemyspeed, enemy.y2, 27, 14);

        switch (enemy.x) {
         
          
          case enemyXb + 1 * enemyspeed + 0 * enemyXd:
          case enemyXb + 4 * enemyspeed + 0 * enemyXd:
          case enemyXb + 7 * enemyspeed + 0 * enemyXd:

          case enemyXb + 2 * enemyspeed + 1 * enemyXd:
          case enemyXb + 5 * enemyspeed + 1 * enemyXd:
          case enemyXb + 8 * enemyspeed + 1 * enemyXd:

          case enemyXb + 3 * enemyspeed + 2 * enemyXd:
          case enemyXb + 6 * enemyspeed + 2 * enemyXd:
          case enemyXb + 9 * enemyspeed + 2 * enemyXd:

          case enemyXb + 1 * enemyspeed + 3 * enemyXd:
          case enemyXb + 4 * enemyspeed + 3 * enemyXd:
          case enemyXb + 7 * enemyspeed + 3 * enemyXd:

          case enemyXb + 2 * enemyspeed + 4 * enemyXd:
          case enemyXb + 5 * enemyspeed + 4 * enemyXd:
          case enemyXb + 8 * enemyspeed + 4 * enemyXd:

          case enemyXb + 3 * enemyspeed + 5 * enemyXd:
          case enemyXb + 6 * enemyspeed + 5 * enemyXd:
          case enemyXb + 9 * enemyspeed + 5 * enemyXd:

          case enemyXb + 1 * enemyspeed + 6 * enemyXd:
          case enemyXb + 4 * enemyspeed + 6 * enemyXd:
          case enemyXb + 7 * enemyspeed + 6 * enemyXd:

          case enemyXb + 2 * enemyspeed + 7 * enemyXd:
          case enemyXb + 5 * enemyspeed + 7 * enemyXd:
          case enemyXb + 8 * enemyspeed + 7 * enemyXd:

          case enemyXb + 3 * enemyspeed + 8 * enemyXd:
          case enemyXb + 6 * enemyspeed + 8 * enemyXd:
          case enemyXb + 9 * enemyspeed + 8 * enemyXd:

          case enemyXb + 1 * enemyspeed + 9 * enemyXd:
          case enemyXb + 4 * enemyspeed + 9 * enemyXd:
          case enemyXb + 7 * enemyspeed + 9 * enemyXd:
            if (
              enemy.y2 === enemyYb + 3 * enemyYd ||
              enemy.y2 === enemyYb + 4 * enemyYd ||
              enemy.y2 === enemyYb + 5 * enemyYd
            ) {
              context.drawImage(green1image, enemy.x, enemy.y2);
            }
            if (enemy.y2 === enemyYb + 2 * enemyYd) {
              //////////////////
              context.drawImage(purple1image, enemy.x, enemy.y2);
            }
            if (enemy.y2 === enemyYb + 1 * enemyYd) {
              context.drawImage(red1image, enemy.x, enemy.y2);
            }
            break;

            case enemyXb  + 0 * enemyXd:  
                case enemyXb  + 1 * enemyXd:
                case enemyXb  + 2 * enemyXd:
                    case enemyXb  + 3 * enemyXd:
                    case enemyXb  + 4 * enemyXd:
                        case enemyXb  + 5 * enemyXd:
                        case enemyXb  + 6 * enemyXd:
                            case enemyXb  + 7 * enemyXd:
                            case enemyXb  + 8 * enemyXd:
                                case enemyXb  + 9 * enemyXd:
          case enemyXb + 2 * enemyspeed + 0 * enemyXd:
          case enemyXb + 5 * enemyspeed + 0 * enemyXd:
          case enemyXb + 8 * enemyspeed + 0 * enemyXd:

          case enemyXb + 3 * enemyspeed + 1 * enemyXd:
          case enemyXb + 6 * enemyspeed + 1 * enemyXd:
          case enemyXb + 9 * enemyspeed + 1 * enemyXd:

          case enemyXb + 1 * enemyspeed + 2 * enemyXd:
          case enemyXb + 4 * enemyspeed + 2 * enemyXd:
          case enemyXb + 7 * enemyspeed + 2 * enemyXd:

          case enemyXb + 2 * enemyspeed + 3 * enemyXd:
          case enemyXb + 5 * enemyspeed + 3 * enemyXd:
          case enemyXb + 8 * enemyspeed + 3 * enemyXd:

          case enemyXb + 3 * enemyspeed + 4 * enemyXd:
          case enemyXb + 6 * enemyspeed + 4 * enemyXd:
          case enemyXb + 9 * enemyspeed + 4 * enemyXd:

          case enemyXb + 1 * enemyspeed + 5 * enemyXd:
          case enemyXb + 4 * enemyspeed + 5 * enemyXd:
          case enemyXb + 7 * enemyspeed + 5 * enemyXd:

          case enemyXb + 2 * enemyspeed + 6 * enemyXd:
          case enemyXb + 5 * enemyspeed + 6 * enemyXd:
          case enemyXb + 8 * enemyspeed + 6 * enemyXd:

          case enemyXb + 3 * enemyspeed + 7 * enemyXd:
          case enemyXb + 6 * enemyspeed + 7 * enemyXd:
          case enemyXb + 9 * enemyspeed + 7 * enemyXd:

          case enemyXb + 1 * enemyspeed + 8 * enemyXd:
          case enemyXb + 4 * enemyspeed + 8 * enemyXd:
          case enemyXb + 7 * enemyspeed + 8 * enemyXd:

          case enemyXb + 2 * enemyspeed + 9 * enemyXd:
          case enemyXb + 5 * enemyspeed + 9 * enemyXd:
          case enemyXb + 8 * enemyspeed + 9 * enemyXd:
            if (
              enemy.y2 === enemyYb + 3 * enemyYd ||
              enemy.y2 === enemyYb + 4 * enemyYd ||
              enemy.y2 === enemyYb + 5 * enemyYd
            ) {
              context.drawImage(green2image, enemy.x, enemy.y2);
            }
            if (enemy.y2 === enemyYb + 2 * enemyYd) {
              //////////////////
              context.drawImage(purple2image, enemy.x, enemy.y2);
            }
            if (enemy.y2 === enemyYb + 1 * enemyYd) {
              context.drawImage(red2image, enemy.x, enemy.y2);
            }
            break;

          case enemyXb + 3 * enemyspeed + 0 * enemyXd:
          case enemyXb + 6 * enemyspeed + 0 * enemyXd:
          case enemyXb + 9 * enemyspeed + 0 * enemyXd:

          case enemyXb + 1 * enemyspeed + 1 * enemyXd:
          case enemyXb + 4 * enemyspeed + 1 * enemyXd:
          case enemyXb + 7 * enemyspeed + 1 * enemyXd:

          case enemyXb + 2 * enemyspeed + 2 * enemyXd:
          case enemyXb + 5 * enemyspeed + 2 * enemyXd:
          case enemyXb + 8 * enemyspeed + 2 * enemyXd:

          case enemyXb + 3 * enemyspeed + 3 * enemyXd:
          case enemyXb + 6 * enemyspeed + 3 * enemyXd:
          case enemyXb + 9 * enemyspeed + 3 * enemyXd:

          case enemyXb + 1 * enemyspeed + 4 * enemyXd:
          case enemyXb + 4 * enemyspeed + 4 * enemyXd:
          case enemyXb + 7 * enemyspeed + 4 * enemyXd:

          case enemyXb + 2 * enemyspeed + 5 * enemyXd:
          case enemyXb + 5 * enemyspeed + 5 * enemyXd:
          case enemyXb + 8 * enemyspeed + 5 * enemyXd:

          case enemyXb + 3 * enemyspeed + 6 * enemyXd:
          case enemyXb + 6 * enemyspeed + 6 * enemyXd:
          case enemyXb + 9 * enemyspeed + 6 * enemyXd:

          case enemyXb + 1 * enemyspeed + 7 * enemyXd:
          case enemyXb + 4 * enemyspeed + 7 * enemyXd:
          case enemyXb + 7 * enemyspeed + 7 * enemyXd:

          case enemyXb + 2 * enemyspeed + 8 * enemyXd:
          case enemyXb + 5 * enemyspeed + 8 * enemyXd:
          case enemyXb + 8 * enemyspeed + 8 * enemyXd:

          case enemyXb + 3 * enemyspeed + 9 * enemyXd:
          case enemyXb + 6 * enemyspeed + 9 * enemyXd:
          case enemyXb + 9 * enemyspeed + 9 * enemyXd:
            if (
              enemy.y2 === enemyYb + 3 * enemyYd ||
              enemy.y2 === enemyYb + 4 * enemyYd ||
              enemy.y2 === enemyYb + 5 * enemyYd
            ) {
              context.drawImage(green3image, enemy.x, enemy.y2);
            }
            if (enemy.y2 === enemyYb + 2 * enemyYd) {
              //////////////////
              context.drawImage(purple3image, enemy.x, enemy.y2);
            }
            if (enemy.y2 === enemyYb + 1 * enemyYd) {
              context.drawImage(red3image, enemy.x, enemy.y2);
            }
        }



        if (enemy.y2 === enemyYb) {
          context.drawImage(bossimage, enemy.x, enemy.y2);
        }
        if (enemy.status === 2){ 
          
          context.clearRect(enemy.x,enemy.y2,27,20)
        }
      });
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

export default CanvasEnemy;
