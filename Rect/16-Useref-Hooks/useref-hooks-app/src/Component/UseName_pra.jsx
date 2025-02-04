import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UseName_pra = () => {
  // const [name, setName] = useState("js");

  // re-rendring awoid to use useRef

  const nameRef = useRef("js");

  const updateName = () => {
    // setName("react");
    nameRef.current = "react";
  };

  const showName = () => {
    console.log(nameRef.current);
    // console.log(name)
  };

  return { updateName, showName };
};

export default UseName_pra;
