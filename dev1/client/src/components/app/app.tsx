import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";

const ScreenSaver = React.lazy(
  () => import("@/pages/screen-saver/screen-saver")
);
const Home = React.lazy(
  () => import("@/pages/home/home")
);
const LivingAtHigh = React.lazy(
  () => import("@/pages/living-at-high/living-at-high")
);

export default function App() {
  const navigate = useNavigate();
  const [usertouched, setUsertouched] = React.useState(0);

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
    <React.Suspense>
      <AppReset />
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        <Route path="/home" element={<Home />} />
        <Route path="/living-at-high" element={<LivingAtHigh />} />
      </Routes>
    </React.Suspense>
  );
}
