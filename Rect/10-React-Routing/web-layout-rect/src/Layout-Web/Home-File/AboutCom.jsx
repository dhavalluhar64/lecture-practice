import React from "react";
import FooterComp from "../Comman-File/FooterComp";
import HeadreComp from "../Comman-File/HeaderComp";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function AboutCom({ imgg }) {
  return (
    <>
      <HeadreComp />
      <h2  className="text-center pt-4">This is a About Page</h2>
      <div className="container">
        <div className="row">
          {imgg.map((items, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <MDBCard>
                <MDBCardImage
                  src={items.images}
                  position="top"
                  alt="images-data"
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </div>

      <FooterComp />
    </>
  );
}

export default AboutCom;
