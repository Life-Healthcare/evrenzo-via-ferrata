import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  ParallelogramButton,
} from "@/components/nav/nav.style";

const Nav: React.FC<{ back?: number; forward?: string }> = (props) => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      {props.back && (
        <ParallelogramButton>
          <button onClick={() => navigate(props.back)}>
            <img src="./assets/nav-back-ico.png" alt="go back" />
          </button>
        </ParallelogramButton>
      )}
      {props.forward && (
        <ParallelogramButton>
          <button onClick={() => navigate(props.forward)}>
            <img src="./assets/nav-forward-ico.png" alt="go back" />
          </button>
        </ParallelogramButton>
      )}
      <ParallelogramButton>
        <button onClick={() => navigate("/sustaining-life")}>
          <img src="./assets/nav-home-ico.png" alt="go back" />
        </button>
      </ParallelogramButton>
    </ButtonContainer>
  );
};

export default Nav;
