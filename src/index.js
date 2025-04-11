import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as BrowswerRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowswerRouter>
    <App />
  </BrowswerRouter>
);
