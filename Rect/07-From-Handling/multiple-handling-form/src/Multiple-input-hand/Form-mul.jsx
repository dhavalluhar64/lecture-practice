import React, { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Form_mul() {
  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // from handling

  const handleSubmit = (event) => {
    event.preventDefault();

    setData({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });

    console.log("From data SuccesFully");
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1701842912302-501bfc88c403?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
                name="name"
                value={Data.name}
                onChange={(event) =>
                  setData({ ...Data, name: event.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form2"
                type="email"
                name="email"
                value={Data.email}
                onChange={(event) =>
                  setData({ ...Data, email: event.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form3"
                type="password"
                name="password"
                value={Data.password}
                onChange={(event) =>
                  setData({ ...Data, password: event.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Repeat your password"
                size="lg"
                id="form4"
                type="password"
                name="cpassword"
                value={Data.cpassword}
                onChange={(event) =>
                  setData({ ...Data, cpassword: event.target.value })
                }
              />
              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I agree all statements in Terms of service"
                />
              </div>
              <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
                Register
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Form_mul;
