import React from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "@/pages/home/home.style";
import Nav from "@/components/nav/nav";

export default function Home() {
  
  return <Section><Nav back={-1} forward="/living-at-high" /></Section>;
}
