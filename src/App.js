import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Kitten";
import Kitten from "./components/Kitten";
import Fruits from "./components/Fruits";
import CurrentDate from "./components/CurrentDate";
import List from "./components/TodoList";
import StatePractice from "./components/StatePractice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React</h1>
          <StatePractice />
          <Kitten />
          <Fruits />

          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List tasks={["walk dog", "workout", "Run"]} />

          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </header>
      </div>
    );
  }
}

export default App;
