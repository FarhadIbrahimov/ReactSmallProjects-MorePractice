import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //during development it will render all components twice in order to find
  //    certain bugs. And also React will check if we're using outdated parts of the
  //    React API.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
