import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScreenSaver from "@/pages/screen-saver/screen-saver";
import EvrenzoAtWork from "@/pages/evrenzo-at-work/evrenzo-at-work";

export default function App() {
  const navigate = useNavigate();
//   const [usertouched, setUsertouched] = React.useState(0);

//   const handleUserTouch = () => {
//     setUsertouched(+new Date());
//   };

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

  return (
    <>
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        <Route path="/evrenzo-at-work" element={<EvrenzoAtWork />} />
      </Routes>
    </>
  );
}
