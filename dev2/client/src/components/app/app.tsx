import React, { ComponentType, createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import SustainingLife from "@/pages/sustaining-life/sustaining-life";
import UncoveringTheMechanism from "@/pages/uncovering-the-mechanism/uncovering-the-mechanism";
import Anaemia from "@/pages/anaemia/anaemia";
import sessionManager from "@/services/session-manager";

export default function App() {
  const navigate = useNavigate();
  const [usertouched, setUsertouched] = React.useState(0);

  const handleUserTouch = () => {
    setUsertouched(+new Date());
  };

  React.useEffect(() => {
    function onContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  React.useEffect(() => {
    const delay = 60;
    window.addEventListener("touchstart", handleUserTouch);
    let timer1 = setTimeout(() => {
      navigate("/");
    }, delay * 1000);

	let timeout: NodeJS.Timeout;
    // Send sessions to server every 1 minute
    (async function sendToServer() {
      await sessionManager.sendToServer();
	  clearTimeout(timeout);
      timeout = setTimeout(() => sendToServer(), delay * 1000);
    })();

    return () => {
      clearTimeout(timer1);
	  clearTimeout(timeout);
      window.removeEventListener("touchstart", handleUserTouch);
    };
  }, [handleUserTouch]);

  React.useEffect(() => {
    function onResize() {
      document.documentElement.style.setProperty(
        "--device-width",
        String(window.innerWidth)
      );
      document.documentElement.style.setProperty(
        "--device-height",
        String(window.innerHeight)
      );
    }

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        <Route path="/sustaining-life" element={<SustainingLife />} />
        <Route
          path="/uncovering-the-mechanism"
          element={<UncoveringTheMechanism />}
        />
        <Route path="/anaemia" element={<Anaemia />} />
      </Routes>
    </>
  );
}
