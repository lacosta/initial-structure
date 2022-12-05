// @packages
import React from "react";
import ReactDOM from "react-dom/client";

// @own
import { App } from "components/App";
import "styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
