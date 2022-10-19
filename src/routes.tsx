import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import { AnimatePresence } from "framer-motion";
import Section1 from "./pages/Section1/Section1";
import { useState } from "react";
import SlideContext, { left } from "./contexts/SlideContext";

export default () => {
  const location = useLocation();
  const [slideDirection, setSlideDirection] = useState(left)

  return (
    <SlideContext.Provider value={[slideDirection, setSlideDirection]}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/1" element={<Section1/>}/>
          <Route path="/2" element={<Home/>}/>
        </Routes>
      </AnimatePresence>
    </SlideContext.Provider>
  )
}