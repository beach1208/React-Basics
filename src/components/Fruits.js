import React, { Component } from "react";
import Citrus from "./Citrus";
import NonCitrus from "./NonCitrus";

class Fruits extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* change code above this line */}
      </div>
    );
  }
}

export default Fruits;
