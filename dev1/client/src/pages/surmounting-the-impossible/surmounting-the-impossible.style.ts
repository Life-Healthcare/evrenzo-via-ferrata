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
  background: url("./assets/surmounting-the-impossible/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: 4.5rem;
  padding-top: 6.4rem;

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  & img {
    margin: 1rem;
  }

  & div {
    justify-content: start;
    align-items: flex-start;
    gap: 8rem;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: start;
  gap: 2.4rem;

  & img {
    margin: 1rem;
  }

  & div:first-child {
    & div:first-child {
      & img {
        margin-top: 2.7rem;
      }
    }
    & div:nth-child(2) {
      & img {
        margin-top: 0.6rem;
      }
    }
    & div:nth-child(3) {
      & img {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  & div:first-child {
    & div:first-child {
      & img {
        margin-bottom: 1rem;
      }
    }

	& div:nth-child(2) {
      & img {
        margin-top: 2rem;
      }
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled.div`
  opacity: 0;
  animation: ${fadeUp} 1s forwards;
`;
