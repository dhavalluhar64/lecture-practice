import { useState } from "react";
import "./App.css";
import LoginPage from "./Component/LoginPage";
import ProfilePage from "./Component/ProfilePage";
import { ContextAPI } from "./store/ContextAPI";

function App() {
  const [user, setuser] = useState(null);

  return (
    <>
      <p>hello This is a react Bootstrap</p>

      <ContextAPI.Provider value={{ user, setuser }}>
        <LoginPage></LoginPage>
        <ProfilePage></ProfilePage>
      </ContextAPI.Provider>
    </>
  );
}

export default App;
