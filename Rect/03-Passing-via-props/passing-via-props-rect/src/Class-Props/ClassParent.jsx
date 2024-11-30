import React, { Component } from "react";
import ClassChild from "./ClassChild";

class ClassParent extends Component {
  render() {
    return (
      <>
        <ClassChild
          name="dhaval"
          course="Fron-tend"
          lastname="Panchal"
          name1="Hiren"
          course1="Cyber-Security"
          name2="jaimin"
          course2="Data-analysis"
        />
      </>
    );
  }
}

export default ClassParent;
