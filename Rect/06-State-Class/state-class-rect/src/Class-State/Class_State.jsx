import React, { Component } from "react";

import Button from "react-bootstrap/Button";

// state :- data we can chnage data. same file data access

class Class_State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handlClick = () => {
    {
      /* class state define this.state */
    }

    {
      /* this.setstate data change */
    }

    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });

    } else {
      
      alert("Count cannot be less than 0!");
    }
  };

  render() {
    return (
      <>
        <h3>hello this is a class State</h3>
        <center>
          <h1>{this.state.count}</h1>
          <Button
            variant="success"
            className="m-2"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </Button>
          <Button variant="danger" onClick={this.handlClick}>
            Decrement
          </Button>
        </center>
      </>
    );
  }
}

export default Class_State;
