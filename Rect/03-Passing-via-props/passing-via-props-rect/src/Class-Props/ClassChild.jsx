import { Component } from "react";

class ClassChild extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  render() {
    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Course</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.props.name}</td>
              <td>{this.props.lastname}</td>
              <td>{this.props.course}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{this.props.name1}</td>
              <td>{this.props.lastname}</td>
              <td>{this.props.course1}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{this.props.name2}</td>
              <td>{this.props.lastname}</td>
              <td>{this.props.course2}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default ClassChild;
