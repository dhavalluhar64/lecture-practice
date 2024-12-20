import React from "react";
import HeadreComp from "../Comman-File/HeaderComp";
import FooterComp from "../Comman-File/FooterComp";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function BlogCom() {
  return (
    <>
      <HeadreComp />

      <h4 className="text-center pt-4">This is a Blog Page</h4>

      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="images-data"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-3 mt-4">
            <MDBCard>
              <MDBCardImage
                src="https://images.pexels.com/photos/27116159/pexels-photo-27116159/free-photo-of-black-bike-by-window-and-red-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                position="top"
                alt="images-data"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-3 mt-4">
            <MDBCard>
              <MDBCardImage
                src="https://images.pexels.com/photos/29207369/pexels-photo-29207369/free-photo-of-charming-urban-street-with-bicycles-and-blue-doors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                position="top"
                alt="images-data"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-3 mt-4">
            <MDBCard>
              <MDBCardImage
                src="https://images.pexels.com/photos/27054260/pexels-photo-27054260/free-photo-of-sky-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                position="top"
                alt="images-data"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>

      <FooterComp />
    </>
  );
}

export default BlogCom;
