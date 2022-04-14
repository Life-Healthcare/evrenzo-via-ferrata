import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  background: url("./assets/home/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:-webkit-scrollbar {
    display: none;
  }

  .header1 {
    width: calc(1020px * var(--scale-x));
  }

  .header2 {
    width: calc(1108px * var(--scale-x));
  }

  .logo {
    width: calc(396px * var(--scale-x));
  }

  .footer {
    width: calc(569px * var(--scale-x));
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(680px * var(--scale-y)); 

  & div:nth-child(2) {
    & img {
      margin-bottom: calc(20px * var(--scale-y));
    }
  }

  & div:nth-child(3) {
    & img {
      margin-bottom: calc(50px * var(--scale-y));
    }
  }
`;

export const Animation = styled.div`
  opacity: 0;
  animation: ${fadeUp} 1s forwards;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Footer = styled.div`
  position: absolute;
  left: calc(104px * var(--scale-x)); 
  bottom: calc(160px * var(--scale-y)); 
`;
