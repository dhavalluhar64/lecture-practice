import { Component } from "react";

import ChildProps from "./ChildProps";

class ParentProps extends Component {
  render()  {
    const Student = [
      { firstName: "Dhaval", lastName: "Panchal", course: "Front-End" },
      { firstName: "Hiren", lastName: "Panchal", course: "Cyber-Security" },
      { firstName: "Jaimin", lastName: "Panchal", course: "Data-Analysis" },
    ];

    return <ChildProps Studentt={Student} />;
  }
}

export default ParentProps;
