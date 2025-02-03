import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log(`component is created`);
  }

  componentDidMount() {
    console.log("comopnent has be added");
  }

  componentDidUpdate(preProps, prevState) {
    console.log(
      `component updated  previosCount : ${prevState.count}  current add: ${this.state.count}`
    );
  }

  componentWillUnmount() {
    console.log(`comoponent to be removed`);
  }

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log(`Render: Component is rendering/re-rendering!`);
    return (
      <>
        <p>Lifecycle Methods</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCount}>Increment</button>
      </>
    );
  }
}

export default Lifecycle;
