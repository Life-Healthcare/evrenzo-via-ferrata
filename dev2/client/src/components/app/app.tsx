import React, { ComponentType, createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import SustainingLife from "@/pages/sustaining-life/sustaining-life";
import UncoveringTheMechanism from "@/pages/uncovering-the-mechanism/uncovering-the-mechanism";
import Anaemia from "@/pages/anaemia/anaemia";

export default function App() {
  const navigate = useNavigate();
  const [usertouched, setUsertouched] = React.useState(0);

  const handleUserTouch = () => {
    setUsertouched(+new Date());
  };

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
