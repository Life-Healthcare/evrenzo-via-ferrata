import React from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "@/pages/screen-saver/screen-saver.style";
import sessionManager from "@/services/session-manager";

export default function ScreenSaver() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/hlf`);
  };
  React.useEffect(() => {
    sessionManager.end();
  }, []);
  return <Section onClick={handleOnClick} />;
}
