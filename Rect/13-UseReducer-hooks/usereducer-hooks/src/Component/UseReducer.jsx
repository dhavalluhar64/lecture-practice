import React, { useReducer, useState } from "react";

const INITIAL_STATE = {
  Name: "",
  email: "",
  MobileNo: "",
};

function Reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "Name":
      return { ...state, Name: payload };

    case "email": {
      return { ...state, email: payload };
    }

    case "MobileNo": {
      return { ...state, MobileNo: payload };
    }
    default:
      return state;
  }
}

const UseReducer = () => {
  // const [Name, setName] = useState("");

  // const [email, setEmail] = useState("");

  // const [MobileNo, setMobileNo] = useState("");

  const [formData, dispatch] = useReducer(Reducer, INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form DataSubmit", { formData });
  };

  const handleName = (e) => {
    dispatch({ type: "Name", payload: e.target.value });
  };

  const handleEmail = (e) => {
    dispatch({ type: "email", payload: e.target.value });
  };

  const handleNumber = (e) => {
    dispatch({ type: "MobileNo", payload: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form className="col-md-3 m-auto my-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              value={formData.Name}
              onInput={handleName}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onInput={handleEmail}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">
              Phone No
            </label>
            <input
              type="number"
              value={formData.MobileNo}
              maxLength={10}
              className="form-control"
              onInput={handleNumber}
              id="exampleInputPassword3"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UseReducer;
