import React from "react";
import { Component } from "react";
import Images from "./Images";

import Button from "react-bootstrap/Button";

class Click_Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImagesShow: true,
    };
  }

  handleOnclickk = () => {
    // if(this.state.ImagesShow !== true){

    //     this.setState({ImagesShow : true});

    // }else{

    //   this.setState({ImagesShow : false})
    // }

    this.setState({ ImagesShow: !this.state.ImagesShow });
  };

  render() {
    return (
      <>
        <center className="mt-5">
          {this.state.ImagesShow ? <Images /> : false} <br /> <br />
          <Button
            variant="primary"
            className="m-1"
            onClick={() => this.setState({ ImagesShow: false })}
          >
            Hide
          </Button>
          <Button
            variant="info"
            className="m-2"
            onClick={() => this.setState({ ImagesShow: true })}
          >
            Show
          </Button>
          <Button variant="warning" onClick={this.handleOnclickk}>
            Toggle
          </Button>
        </center>
      </>
    );
  }
}

export default Click_Event;
