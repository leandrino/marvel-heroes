import React, { Component } from "react";
import "./App.css";
import Root from "./Root";
import Containers from "./containers";

class App extends Component {
  render() {
    return (
      <Root>
        <div className="App">
          <Containers/>
        </div>
      </Root>
    );
  }
}


export default App;
