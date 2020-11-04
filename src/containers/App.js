import React, { Component } from 'react';
import logo from '../logo.svg';
import '../containers/App.css';
import Animation from '../components/animation'

//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//https://medium.com/javascript-in-plain-english/better-understanding-of-timers-in-javascript-settimeout-vs-requestanimationframe-bf7f99b9ff9b#:~:text=There%20are%20four%20timer%20functions%20in%20JavaScript.&text=setInterval%20%E2%80%94%20a%20function%20that%20calls,which%20is%20improved%20by%20Mozilla.
//https://stackoverflow.com/questions/27108333/why-would-i-ever-need-to-cancelanimationframe
//https://javascript.info/event-loop
//https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
//https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/

class App extends Component {
  render() {
    // console.log('App')
    return (
      <div className="glx">
      <Animation enemyXb={70} 
                 enemyXd={40}
                 enemyYb={60}
                 enemyYd={25}
                 enemySpeed={3}></Animation>
             
      </div>
    );
  }
}

export default App;
