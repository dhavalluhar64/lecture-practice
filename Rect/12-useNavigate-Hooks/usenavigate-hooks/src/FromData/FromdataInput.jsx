import React, { useState } from "react";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function FromdataInput() {
  const [formdata, setFromdata] = useState({
    email: "",
    password: "",
  });

  const redirect = useNavigate(); // The main porpose of useNavigate hooks

  const handleChangeData = (event) => {
    const { name, value } = event.target;

    setFromdata({ ...formdata, [name]: value });
  };

  const handlefromsubmit = (event) => {
    event.preventDefault();

    setFromdata({
      email: "",
      password: "",
    });

    redirect("/home"); // navigate loaction path
  };

  return (
    <>
      <p>This is the formdata</p>

      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <form action="" onSubmit={handlefromsubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChangeData}
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={formdata.password}
                onChange={handleChangeData}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg">
                Sign in
              </MDBBtn>
            </form>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with facebook
            </MDBBtn>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#55acee" }}
            >
              <MDBIcon fab icon="twitter" className="mx-2" />
              Continue with twitter
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default FromdataInput;
