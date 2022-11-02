import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Sections/Section1/One"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SlideContext, { left } from "./contexts/SlideContext";
import Sections from "./pages/Sections/Sections";

export default () => {
  const location = useLocation();
  const [slideDirection, setSlideDirection] = useState(left)

  return (
    <SlideContext.Provider value={[slideDirection, setSlideDirection]}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/:section/:page" element={<Sections/>}/>
        </Routes>
      </AnimatePresence>
    </SlideContext.Provider>
  )
}