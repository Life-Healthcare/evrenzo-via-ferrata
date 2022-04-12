import React, { ComponentType, createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import Home from "@/pages/home/home";
import LivingAtHigh from "@/pages/living-at-high/living-at-high";
import Impossible from "@/pages/surmounting-the-impossible/surmounting-the-impossible";

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
      <AppReset />
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        <Route path="/home" element={<Home />} />
        <Route path="/living-at-high" element={<LivingAtHigh />} />
        <Route path="/surmounting-the-impossible" element={<Impossible />} />
      </Routes>
    </>
  );
}
