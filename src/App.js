import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Kitten";
import Kitten from "./components/Kitten";
import Fruits from "./components/Fruits";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React</h1>
          <Kitten />
          <Fruits />
        </header>
      </div>
    );
  }
}

export default App;
