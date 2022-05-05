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
  padding-left: calc(90px * var(--scale-x)); 
  padding-top: calc(128px * var(--scale-y)); 

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  color: #007a33;
  font-size: calc(52px * var(--scale-x)); // 2.6rem;
  line-height: calc(46px * var(--scale-y)); // 2.3rem;
  letter-spacing: calc(1.6px * var(--scale-x));  // 0.08rem;
  font-weight: bold;
`;

export const Main = styled.main`
  margin-top: calc(70px * var(--scale-x));  // 3.5rem;
  display: flex;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: calc(1.2px * var(--scale-x));  // 0.06rem;
  gap: calc(48px * var(--scale-x));  // 2.4rem;

  & > div:first-of-type {
    width: calc(912px * var(--scale-x));  // 45.6rem;
    & p {
      font-size: calc(32px * var(--scale-x));  // 1.6rem;
      line-height: calc(44px * var(--scale-y));  // 2.2rem;
      margin-bottom: calc(20px * var(--scale-y));  // 1rem;
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
      letter-spacing: calc(1.2px * var(--scale-x));  // 0.06rem;
      margin-top: calc(20px * var(--scale-y));  // 1rem;
      margin-bottom: calc(20px * var(--scale-x));  // 1rem;
    }

    & .smaller {
      & ul {
        list-style-type: none;
      }
      & p {
        font-weight: lighter;
        font-size: calc(23px * var(--scale-x));  // 1.15rem;
        line-height: calc(34px * var(--scale-y));  // 1.7rem;
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(30px * var(--scale-y));  // 4rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  & img {
	  width: calc(496px * var(--scale-x));
	  height: calc(108px * var(--scale-y));
  }
  & div:first-child {
    & div:first-child {
      & img {
        margin-bottom: calc(20px * var(--scale-y));  // 1rem; 
      }
    }

    & div:nth-child(2) {
      & img {
        margin-top: calc(40px * var(--scale-y));  // 2rem;
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

export const Card = styled.div`
  aspect-ratio: 1 / 1;
  width: calc(1417.94px * var(--scale-x)); // 70.897rem;
  height: calc(1179.68px * var(--scale-y)); // 58.984rem;
  position: relative;

  & > button {
    font-size: calc(40px * var(--scale-x)); // 2rem;
    text-align: end;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: calc(40px * var(--scale-x)); // 2rem;
    height: calc(40px * var(--scale-y)); // 2rem;
    padding: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    position: absolute;
    top: calc(40px * var(--scale-y)); // 2rem;
    right: calc(40px * var(--scale-x)); // 2rem;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;
