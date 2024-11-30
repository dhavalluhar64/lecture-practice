import React, { useState } from "react";

import Button from "react-bootstrap/Button";

function NameState() {
  const [name, setname] = useState("Dhaval");

  return (
    <>
      <center className="mt-5">
        <p>Name: {name}</p>

        <Button variant="secondary" onClick={() => setname("Hiren")}>
          Change Name
        </Button>
      </center>
    </>
  );
}

export default NameState;
