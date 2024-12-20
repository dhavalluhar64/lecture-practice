import React, { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Form_handlemul() {
  // State for managing form data

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Conpassword: "",
  });

  // Handle input field changes

  //(1) use methods or

  // const handleInputChange = (event) => {
  //   setFormData({
  //     ...DataRegister,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // (2) use methods or
  const handleInputChange = (event) => {
    const { name, value } = event.target; // extract name and value

    setFormData({
      ...formData,
      [name]: value, // Dynamically update the field
    });
  };

  // (1) Handle form submission

  const handleFormSubmit = (event) => {
    event.preventDefault();

    formData.password !== formData.Conpassword
      ? alert("Your password dose not match")
      : alert("Login SuccessFully");

    //Reset form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      Conpassword: "",
    });

    console.log("Finally form submited");
  };

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <form action="" onSubmit={handleFormSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      name="name"
                      value={formData.name}
                      className="w-100"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      name="email"
                      label="Your Email"
                      id="form2"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      name="password"
                      label="Password"
                      id="form3"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      label="Repeat your password"
                      id="form4"
                      type="password"
                      name="Conpassword"
                      value={formData.Conpassword}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    Register
                  </MDBBtn>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Form_handlemul;
