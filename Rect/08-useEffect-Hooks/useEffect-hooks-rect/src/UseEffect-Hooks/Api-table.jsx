import React, { useEffect, useState } from "react";
import axios from "axios";

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function Api_table() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    handleapi();
  }, []);

  const handleapi = async () => {
    const response = await axios.get("https://dummyjson.com/users");

    // console.log(response.data.users)

    setuser(response.data.users);
  };

  return (
    <>
      <div className="container">
        <MDBTable bordered borderColor="primary">
          <MDBTableHead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">age</th>
              <th scope="col">Email</th>
              <th scope="col">state</th>
              <th scope="col">country</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {user.map((dataAdded, idx) => {
              return (
                <tr>
                  <th scope="row">{dataAdded.id}</th>
                  <td>{dataAdded.firstName}</td>
                  <td>{dataAdded.lastName}</td>
                  <td>{dataAdded.age}</td>
                  <td>{dataAdded.email}</td>
                  <td>{dataAdded.address.state}</td>
                  <td>{dataAdded.address.country}</td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}

export default Api_table;
