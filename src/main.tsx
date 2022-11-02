import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import App from './routes'

const VERSION = '0.0.1'
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`./sw.js?v=${VERSION}`)
      .then((registration) => {
        registration.onupdatefound = () => {
          const serviceWorker = registration.installing;
          if (serviceWorker == null) return;
          let updating = false;
          serviceWorker.onstatechange = () => {
            if (
              serviceWorker.state === "installed" &&
              navigator.serviceWorker.controller &&
              registration &&
              registration.waiting
            ) {
              updating = true;
              registration.waiting.postMessage({ type: "SKIP_WAITING" });
            }

            if (updating && serviceWorker.state === "activated") {
              registration
                .update()
                .then(() => {
                  window.location.reload();
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          };
        };
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
