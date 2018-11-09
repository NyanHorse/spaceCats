import React from "react"; //importing the library
import ReactDOM from "react-dom"; //importing dom specific methods
import Main from "./components/main"; //conecting with main
require('dotenv').config();

class App extends React.Component { //class App inherits from react
  render() { //Render a React element into the DOM
    return (
      <div>
        <Main />
      </div>
    );
  }
}
//passing things
var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);