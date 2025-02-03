import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./FromData/Home.jsx";
import FromdataInput from "./FromData/FromdataInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/formData" element={<FromdataInput />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
