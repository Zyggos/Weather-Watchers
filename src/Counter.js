import React from "react";

class NumericCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 5 };
    this.decreaseNumber = this.decreaseNumber.bind(this);
    this.increaseNumber = this.increaseNumber.bind(this);
  }

  decreaseNumber() {
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  }

  increaseNumber() {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  }

  render() {
    let currentDate = new Date("june 21 2027");
    currentDate.setDate(currentDate.getDate() + this.state.number);
    return (
      <div>
        <button onClick={this.decreaseNumber}>Decrease</button>
        <span>
          {currentDate.toDateString()} [Counter: {this.state.number}]
        </span>
        <button onClick={this.increaseNumber}>Increase</button>
      </div>
    );
  }
}

export default NumericCounter;
