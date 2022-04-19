import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "@/components/app/app";
import AppReset from "@/styles/reset";

if ("serviceWorker" in navigator && process.env.NODE_ENV !== "development") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <AppReset />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
