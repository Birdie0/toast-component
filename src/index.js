import React from "react";
import ReactDOM from "react-dom/client";

import "./global-styles.css";
import App from "./components/App";
import ToastProvider from "./providers/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
