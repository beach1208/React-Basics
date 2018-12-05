import React, { Component } from "react";

class StatePractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nagisa Kojima",
      count: 0,
      input: " "
    };

    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  handleClick() {
    this.setState({
      name: "Brandt Williams"
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    if (this.state.count !== 0)
      this.setState({
        count: 0
      });
  }

  inputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p>
          My name is : <strong>{this.state.name}</strong>
        </p>
        <button onClick={this.handleClick}>Click me!</button>

        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decremenet</button>
        <button onClick={this.reset}>Reset</button>

        <input value={this.state.input} onChange={this.inputChange} />
        <p>Typed from input: {this.state.input}</p>
      </div>
    );
  }
}

export default StatePractice;
