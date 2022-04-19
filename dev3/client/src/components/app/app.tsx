import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import Hlf from "@/pages/hlf/hlf";
import HlfVideo from "@/pages/hlf-pathway-in-action/hlf-pathway-in-action";

export default function App() {
  const navigate = useNavigate();
  const [usertouched, setUsertouched] = React.useState(0);

  const handleUserTouch = () => {
    setUsertouched(+new Date());
  };

//   React.useEffect(() => {
//     const delay = 60;
//     window.addEventListener("touchstart", handleUserTouch);
//     let timer1 = setTimeout(() => {
//       navigate("/");
//     }, delay * 1000);

//     return () => {
//       clearTimeout(timer1);
//       window.removeEventListener("touchstart", handleUserTouch);
//     };
//   }, [handleUserTouch]);

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
        <Route path="/hlf" element={<Hlf />} />
        <Route path="/hlf-pathway-in-action" element={<HlfVideo />} />
      </Routes>
    </>
  );
}
