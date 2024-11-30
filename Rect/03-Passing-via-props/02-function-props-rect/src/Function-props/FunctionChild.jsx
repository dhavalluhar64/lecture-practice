import React from "react";

const FunctionChild = ({ ChildAcsess }) => {
  return (
    <>
      {ChildAcsess.map((allDetails, index) => (
        <div className="col-md-3" key={index}>
          <div className="card m-3">
            <img
              src={allDetails.images}
              className="card-img-top"
              alt="Product image"
              style={{ width: "100%", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{allDetails.title}</h5>
              <p className="card-text">{allDetails.cardContaint}</p>
              <a href="#" className="btn btn-primary">
                {allDetails.Buttonn}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FunctionChild;
