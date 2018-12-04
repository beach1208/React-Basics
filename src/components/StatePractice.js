import React, { Component } from "react";

class StatePractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nagisa Kojima"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: "Brandt Williams"
    });
  }
  render() {
    return (
      <div>
        <p>
          My name is : <strong>{this.state.name}</strong>
        </p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default StatePractice;
