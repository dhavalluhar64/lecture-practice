import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Bootstrap link

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// MDB link

// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
