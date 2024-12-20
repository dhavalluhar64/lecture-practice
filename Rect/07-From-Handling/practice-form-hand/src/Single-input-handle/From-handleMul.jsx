import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { use } from "react";

function Form_handleMul() {
  const [FromDataa, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // alert popos

  const [alertt, setalertt] = useState({
    variant: "",
    show: false,
    massage: "",
  });

  const handleFromData = (event) => {
    const { value, name } = event.target;

    setFormData({
      ...FromDataa,

      [name]: value,
    });
  };

  // Handle form submission

  const handleSubmit = (event) => {
    if (FromDataa.password !== FromDataa.confirmPassword) {
      setalertt({
        massage: " Your enter wrong password!",
        variant: "danger",
        show: true,
      });
    } else {
      setalertt({
        massage: "Form Submited",
        variant: "primary",
        show: true,
      });
    }

    event.preventDefault();

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                {/* alert button show */}

                {alertt.show && (
                  <Alert variant={alertt.variant}>{alertt.massage}</Alert>
                )}

                <form action="" onSubmit={handleSubmit}>
                  <MDBRow>
                    <MDBCol col="4">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="form1"
                        type="text"
                        value={FromDataa.firstName}
                        name="firstName"
                        onChange={handleFromData}
                      />
                    </MDBCol>

                    <MDBCol col="4">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="form2"
                        type="text"
                        value={FromDataa.lastName}
                        name="lastName"
                        onChange={handleFromData}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                    value={FromDataa.email}
                    name="email"
                    onChange={handleFromData}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                    value={FromDataa.password}
                    name="password"
                    onChange={handleFromData}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm-Password"
                    id="form4"
                    type="password"
                    value={FromDataa.confirmPassword}
                    name="confirmPassword"
                    onChange={handleFromData}
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>
                </form>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Form_handleMul;