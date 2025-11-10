import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import App from "./App.jsx";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: setup counter functionality
setupCounter(document.querySelector("#counter"));
