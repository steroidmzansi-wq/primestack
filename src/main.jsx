import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("app"));

root.render(
  <>
    <App />
  </>
);

// Optional: setup counter functionality
setupCounter(document.querySelector("#counter"));
