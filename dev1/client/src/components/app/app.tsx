import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";

const ScreenSaver = React.lazy(() => import("@/pages/screen-saver/screen-saver"));

export default function App() {

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<ScreenSaver />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </React.Suspense>
  );
}
