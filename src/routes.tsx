import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import { AnimatePresence } from "framer-motion";
import Section1 from "./pages/Section1/Section1";

export default () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/1" element={<Section1/>}/>
      </Routes>
    </AnimatePresence>
  )
}