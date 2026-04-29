import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    // The function loses binding in the event handler onCLick and creates a copy instead. To bind it again to current object we use the below method
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //  The below is an event handler function written as class method
  handleDecrement() {
    console.log(this); // The this keyword should show the current object. However a single copy is created and the method loses touch with the this/current object instance. To bind we use the binding method in constructor
    this.setState((curState) => {
      console.log(curState);
      return { count: curState.count - 1 };
    });
    // Another way to do it
    //  this.setState({count: 10});

    // curState is the current state object which has { count : 4}
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    // Some logic can be writter here
    const date = new Date("Feb 9 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {" "}
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
