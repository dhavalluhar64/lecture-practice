import "./App.css";
import Form_handSing from "./Single-input-handle/Form-handSing";
import Form_handleMul from "./Single-input-handle/From-handleMul";

function App() {
  return (
    <>
      <h1>Hello this is Form tag</h1>

      <div className="container">
        <div className="row">
          {/* <Form_handSing /> */}
          
          Multiple form handle
          <Form_handleMul />
        </div>
      </div>
    </>
  );
}

export default App;
