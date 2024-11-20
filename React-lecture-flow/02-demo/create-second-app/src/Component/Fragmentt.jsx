//(1) What is Fragments?

//--> Allows grouping of multiple elements without extra DOM nodes.

//(2) Why?

//--> retunr multiple elements without a wrapping parent

//Cleaner DOM and consistent styling

//(3) Two syntaxes

//<React.Fragment>..</React.Fragment>
//<></>

import React from "react";

const Fragmentt = () => {
  return (
    <>
      <h1>Healthy Food</h1>
      <ul>
        <li>Beets</li>
        <li>Peanut butter</li>
        <li>Almonds</li>
        <li>Mangos</li>
      </ul>
    </>
  );
};

export default Fragmentt;
