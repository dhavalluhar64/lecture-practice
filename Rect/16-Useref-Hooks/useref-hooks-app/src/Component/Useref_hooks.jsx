import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import UseName_pra from "./UseName_pra";

// useRef hooks:- Generally useref hooks ka use dom element access karne ke liye use karte hai

const Useref_hooks = () => {
  // react way useref hooks

  const refrences = useRef();

  const nameHooks = UseName_pra();

  useEffect(() => {
    // console.log(document.getElementById("firstname"))
    // console.log(refrences.current)
    //  console.log(refrences)

    refrences.current.focus();

    refrences.current.style.color = "blue";
    refrences.current.style.backgroundColor = "red";
  }, []);

  // Js way input selects
  // useEffect(() => {
  //   document.getElementById("firstiId").focus();
  // }, []);

  return (
    <>
      <h1>useRef Hooks</h1>
      <input type="text" ref={refrences} placeholder="Click the Input" />
      {console.log("i am re-rendring")}
      <br />
      <br />
      <button onClick={nameHooks.updateName}>Update Name</button>
      <br />
      <br />
      <button onClick={nameHooks.showName}>Show Name</button>
    </>
  );
};

export default Useref_hooks;
