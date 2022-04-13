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
  background: url("./assets/anaemia/background.png");
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
  color: #007a33;
  font-size: 2.6rem;
  line-height: 2.3rem;
  letter-spacing: 0.08rem;
  font-weight: bold;
`;

export const Main = styled.main`
  margin-top: 3.5rem;
  display: flex;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: 0.06rem;
  gap: 2.4rem;

  & > div:first-of-type {
    width: 45.6rem;
    & p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      margin-bottom: 1rem;
      & .dashed {
        list-style-type: none;
      }
      & sup {
        font-size: medium;
      }
    }

    & .bold {
      font-weight: bold;
      font-style: italic;
      letter-spacing: 0.06rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    & .smaller {
      & ul {
        list-style-type: none;
      }
      & p {
        font-weight: lighter;
        font-size: 1.15rem;
        line-height: 1.7rem;
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
