import styled, { keyframes } from "styled-components";

const SlideDown = keyframes`
  from {
	  opacity: 0;
	  transform: translateY(-3rem);
	}
	to {
	  opacity: 1;
	  transform: translateY(0);
	}
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalOverLay = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  padding: calc(20px * var(--scale-x));  //1rem;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 30;
  animation: ${SlideDown} 300ms ease-out forwards;

  & > .content {
    padding: calc(20px * var(--scale-x));  //1rem;
  }
`;
