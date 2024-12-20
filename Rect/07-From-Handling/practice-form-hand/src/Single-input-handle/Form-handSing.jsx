import React, { useState } from "react";

// single input and single useState()

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Form_handSing() {
  const [email, setemail] = useState("");

  const [Pass, setPass] = useState("");

  // form handling

  const handleForm = (event) => {
    event.preventDefault();

    setPass("");
    setemail("");

    console.log("Data Submited");
  };

  return (
    <>
      <p>Single input form Handling</p>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="4">
            <form action="" onSubmit={handleForm}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                value={email}
                size="lg"
                onChange={(e) => setemail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={Pass}
                onChange={(e) => setPass(e.target.value)}
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

export default Form_handSing;
