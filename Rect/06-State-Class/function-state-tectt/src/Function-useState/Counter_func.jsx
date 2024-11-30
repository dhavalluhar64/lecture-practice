// Hooks :- pre inbuilt Always function Component use. Do not use for class

//useState :- Declare a State variable that you can update directly

//syntax :- [initial value, setinitial] = useState(initial value)

import React, { useState } from "react";

import Button from "react-bootstrap/Button";

function Counter_func() {
  const [Countval, setCountval] = useState(0);

  const HandleClickk = () => {
    if (Countval > 0) {
      setCountval(Countval - 1);
    } else {
      alert("Count can not be less then 0!");
    }
  };

  return (
    <>
      <h3>This is a function useState</h3>
      <center>
        <h1>{Countval}</h1>
        <Button variant="success" onClick={() => setCountval(Countval + 1)}>
          Increment
        </Button>
        <Button variant="danger" className="m-2" onClick={HandleClickk}>
          Decrement
        </Button>

        <Button variant="warning" onClick={() => setCountval(0)}>
          Zero
        </Button>
      </center>
    </>
  );
}

export default Counter_func;
