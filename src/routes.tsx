import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import { AnimatePresence } from "framer-motion";

export default () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/2" element={<Home/>}/>
      </Routes>
    </AnimatePresence>
  )
}