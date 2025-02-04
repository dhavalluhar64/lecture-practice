import React from "react";

function ChildCompo({ handleClick }) {
  console.log("Child Component Render");
  return (
    <>
      <button type="submit" onClick={handleClick}>
        Click to Increase count
      </button>
    </>
  );
}

export default ChildCompo;
