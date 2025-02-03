import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <Fromdata /> */}
      <p>Hello this is a useNaviagte hooks</p>

      <nav>
        <Link to="/home">Home</Link> <Link to="/formData">FormData</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
