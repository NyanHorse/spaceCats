import React from "react";
import TestView from "./testView";


class Main extends React.Component { //class Main inherits from react
  constructor(props) {
    super(props); //inherits properties
    this.state = {test: false}
  }; 

  goTest() {
      this.setState({test: true});
  }

  render() {

    let home;

    if (!this.state.test) {
        home =( <div>
            <h1>Space Cats</h1>
            <h3>Find out what cat planet you are!</h3>
            <img src="../src/assets/planet1.png" onClick={() => this.goTest()}/>
            <img src="../src/assets/planet2.png" onClick={() => this.goTest()}/>
            <img src="../src/assets/planet3.png" onClick={() => this.goTest()}/>
        </div>)
    } else {
        home = <TestView />
    }
    
    return (
      <div>
        {home}
      </div>
    );


  }
}

export default Main;