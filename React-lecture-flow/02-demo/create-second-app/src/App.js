import React from 'react';
import './App.css';
import Compdemo2 from "./Component/Compdemo2";
import Fragmentt from './Component/Fragmentt';
import InlineStyle from './Style-CSS/InlineStyle';
import Internal from './Style-CSS/Internal';
import External from './Style-CSS/External';
import ClassComp from './Component/ClassComp';
import FunctionComp from './Component/FunctionComp';


function App() {
  return (

    <>
      <h1>React js course</h1>

      {/* class Components */}

      <ClassComp />

      {/* Function Components */}

      <FunctionComp />

      <Compdemo2 />
      <Fragmentt />

      {/* style in inline css add file  */}

      <InlineStyle />

      {/* style in internal css add file */}

      <Internal />

      {/* style in external css add file */}

      <External />
    </>

  );
}

export default App;
