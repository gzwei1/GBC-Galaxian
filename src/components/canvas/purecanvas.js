import React, { Component } from 'react';

class PureCanvas extends Component {
    shouldComponentUpdate() { return false; }
     
    render() {
        // console.log(2);
      return (
        <canvas width="300" height="300" 
          ref={node => node ? this.props.contextRef(node.getContext('2d')) : null}
        />
      )
    }
  }

  
  export default PureCanvas;