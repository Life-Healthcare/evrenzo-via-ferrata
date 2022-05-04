import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import EvrenzoAtWork from "@/pages/evrenzo-at-work/evrenzo-at-work";
import FirstTreatment from "@/pages/first-treatment/first-treatment";
import Congratulations from "@/pages/congratulations/congratulations";

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

  return (
    <>
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        <Route path="/first-treatment" element={<FirstTreatment />} />
        <Route path="/evrenzo-at-work" element={<EvrenzoAtWork />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
    </>
  );
}
