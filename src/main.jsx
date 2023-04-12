import React from "react";
import ReactDOM from "react-dom/client";
import DisplayProvider from "./store/DisplayProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>
);
