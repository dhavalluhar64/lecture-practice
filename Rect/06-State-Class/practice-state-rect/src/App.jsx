import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Person_data from "./Person-State/Pperson_data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is a state in react js</h1>
      <center>
        <Pperson_data />
      </center>
    </>
  );
}

export default App;
