import Mdb_boot from "./All-Bootstrap/Mdb-boot";
import Mdb_foot from "./All-Bootstrap/Mdb-foot";
// import Rect_boot from "./All-Bootstrap/Rect-boot";
import "./App.css";

function App() {
  return (
    <>
      <h2> this is a react bootstrap</h2>
      <div className="container">
        <div className="row">
          {/* this is the react bootstrap */}
          {/* <Rect_boot /> */}
        </div>

        <div className="row">
          {/* This is the MDB bootstrap */}
          <Mdb_boot />
        </div>

        {/* MDB footer */}

        <Mdb_foot />
      </div>
    </>
  );
}

export default App;
