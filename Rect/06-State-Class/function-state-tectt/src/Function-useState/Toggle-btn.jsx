import React, { useState } from "react";
import Imagees_toggle from "../Images-toggle/Imagees_toggle";

import Button from "react-bootstrap/Button";

function Toggle_btn() {
  const [imageees, setIsImageees] = useState(true);

  return (
    <>
      <center className="mt-5">
        {imageees ? <Imagees_toggle /> : false} <br /> <br />
        <Button
          variant="primary"
          className="m-1"
          onClick={() => setIsImageees(false)}
        >
          Hide
        </Button>
        <Button variant="info" className="m-2" onClick={() => setIsImageees(true)}>
          Show
        </Button>
        <Button variant="warning" onClick={() => setIsImageees(!imageees)}>Toggle</Button>
      </center>
    </>
  );
}

export default Toggle_btn;
