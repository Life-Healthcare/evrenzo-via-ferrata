import React from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "@/pages/screen-saver/screen-saver.style";

export default function ScreenSaver() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/sustaining-life`);
  };
  return <Section onClick={handleOnClick} />;
}
