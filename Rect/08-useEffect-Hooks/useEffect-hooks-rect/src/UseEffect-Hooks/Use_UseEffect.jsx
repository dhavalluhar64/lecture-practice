// useEffect : - function side effect. with dependencies [optional,[]]

// re-rendring component [], with state

// step :- When a component is added to the DOM, React runs your effect's setup function. On every re-render with changed dependencies, React first runs the cleanup function (if provided) with the old values, then runs the setup function with the new values. When the component is removed from the DOM, React runs the cleanup function.

import React, { useState } from "react";

import Button from "react-bootstrap/Button";

import { useEffect } from "react";

function Use_UseEffect() {
  const [count, setCount] = useState(0);

  // (1) without dependencies

  //   useEffect(() => {
  //     console.log("re-rendring");
  //   });

  // (2) with dependencies blank

  //  useEffect(() => {

  //      console.log("re-rendring");

  //      return(() => {

  //          console.log("re-rendring-call")
  //      })
  //  })

  // (3) useState with useEffect

  useEffect(() => {
    console.log("re-rendring-call");

    return () => {
      console.log("re-rendring-return-call");
    };
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </>
  );
}

export default Use_UseEffect;
