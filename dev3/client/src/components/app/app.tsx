import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import Hlf from "@/pages/hlf/hlf";
import HlfVideo from "@/pages/hlf-pathway-in-action/hlf-pathway-in-action";
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

    return () => {
      clearTimeout(timer1);
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

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    // Send sessions to server every 1 minute
    (async function sendToServer() {
      await sessionManager.sendToServer();
      clearTimeout(timeout);
      timeout = setTimeout(() => sessionManager.sendToServer(), 60000);
    })();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        <Route path="/hlf" element={<Hlf />} />
        <Route path="/hlf-pathway-in-action" element={<HlfVideo handleUserTouch={handleUserTouch} />} />
      </Routes>
    </>
  );
}
