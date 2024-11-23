import { Component } from "react";

className ChildProps extends Component {
  render() {
    return (
      <table
        classNameName="table table-bordered border-primary"
        style={{ width: "50%", margin: "10px auto" }}
      >
        <thead>
          <tr classNameName="text-center">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {this.props.Studentt.map((data, index) => (
            <tr key={index} classNameName="text-center">
              <th scope="row">{index + 1}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ChildProps;
