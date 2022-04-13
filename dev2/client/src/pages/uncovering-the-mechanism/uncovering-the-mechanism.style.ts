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

interface Props {
  backgroundColor?: string;
}

export const Section = styled.section`
  background: url("./assets/uncovering-the-mechanism/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: 5.5rem;
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

  & img {
    margin: 1rem;
  }

  & > div:first-of-type {
    width: 39rem;
    & p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      & sup {
        font-size: medium;
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 8.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;

  & p {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    letter-spacing: 0.06rem;
    color: #4d4d4f;
    font-size: 1.15rem;
    line-height: 1.7rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
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

export const Grid = styled.div`
  width: 100%;
  max-width: 50vw;
  gap: 2.5em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  font-family: "Trade Gothic LT Std Extended";

  & .grid-lines {
    position: absolute;
    inset: 0;
    z-index: -1;
    color: black;
    display: block;
    width: 100%;
    height: 100%;
  }

  & .item {
    aspect-ratio: 1 / 1;
    display: block;
    width: 294.83px;
    height: 274.92px;
    clip-path: polygon(100% 0, 100% 85%, 85% 100%, 0 100%, 0 0);
    overflow: hidden;

    & img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3rem;
    }

    & button {
      font-size: 1.55rem;
      line-height: 1.75rem;
      width: inherit;
      height: inherit;
      background-color: transparent;
      border: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      & p {
        width: 10rem;

        & sub {
          font-size: medium;
        }
      }
    }
  }
  & .item:nth-child(1) {
    background-color: #007a33;
  }
  & .item:nth-child(2) {
    background-color: #ad1aac;
  }
  & .item:nth-child(4) {
    background-color: #43b02a;
  }
  & .item:nth-child(5) {
    background-color: #40146e;
  }
  & .item:nth-child(6) {
    background-color: #4ec3e0;
  }
  & .item:nth-child(8) {
    background-color: #004c2f;
  }
  & .item:nth-child(9) {
    background-color: #005893;
  }
`;

export const Card = styled.div<Props>`
  ${(Props) => `background-color: ${Props.backgroundColor};`}
  aspect-ratio: 1 / 1;
  width: 37.888rem;
  height: 35.3295rem;
  clip-path: polygon(100% 0, 100% 85%, 85% 100%, 0 100%, 0 0);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Trade Gothic LT Std Extended";
  position: relative;

  & > div {
    text-align: center;
    width: 28.9rem;
  }

  & .title {
    font-size: 2.6rem;
    line-height: 2.65rem;
    margin-bottom: 1rem;

    & sub {
      font-size: xx-large;
    }
  }

  & .content {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  & > button {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    background: url("./assets/close-button.png");
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    width: 1.537rem;
    height: 1.537rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
