import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";

import ImagesData from "./ImagesData";

// Multiple Data can Change in useState({}) in Objects and Array

function Usestate_mul() {
  const [count, setCount] = useState({
    count: 0,
    name: "Dhaval",
    isImage: true,
  });

  const handleIncre = () => {
    setCount({ ...count, count: count.count + 1 });
  };

  const handleDcrem = () => {
    count.count > 0
      ? setCount({ ...count, count: count.count - 1 })
      : alert("Count cannot be less than 0!");
  };

  const handleChange = () => {
    setCount({ ...count, name: "Hiren" });
  };

  const handleToggle = () => {
    setCount({ ...count, isImage: !count.isImage });
  };

  return (
    <>
      <center>
        <h1>{count.count}</h1> <br />
        <br />
        <Button className="m-2" variant="success" onClick={handleIncre}>
          Increment
        </Button>
        <Button variant="danger" onClick={handleDcrem}>
          Decrement
        </Button>
        <p className="mt-5">{count.name}</p>
        <Button onClick={handleChange} variant="primary">
          Change Name
        </Button>{" "}
        <br />
        <br />
        {count.isImage ? <ImagesData /> : false} <br />
        <br />
        <Button
          variant="success"
          onClick={() => setCount({ ...count, isImage: false })}
        >
          Hide
        </Button>
        <Button
          onClick={() => setCount({ ...count, isImage: true })}
          variant="warning"
          className="m-2"
        >
          Show
        </Button>
        <Button onClick={handleToggle} variant="danger">
          Toggle
        </Button>
      </center>
    </>
  );
}

export default Usestate_mul;
