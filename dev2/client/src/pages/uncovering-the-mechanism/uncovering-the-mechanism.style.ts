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
  padding-left: calc(110px * var(--scale-x)); 
  padding-top: calc(128px * var(--scale-y)); 

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  color: #007a33;
  font-size: calc(52px * var(--scale-x)); 
  line-height: calc(46px * var(--scale-x)); 
  letter-spacing: calc(1.6px * var(--scale-x)); 
  font-weight: bold;
`;

export const Main = styled.main`
  margin-top: calc(70px * var(--scale-y)); 
  display: flex;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: calc(1.2px * var(--scale-x)); 
  gap: calc(48px * var(--scale-x)); 

  & img {
    margin-top: calc(20px * var(--scale-y)); 
    margin-bottom: calc(20px * var(--scale-y)); 
    margin-left: calc(20px * var(--scale-x)); 
    margin-right: calc(20px * var(--scale-x)); 
  }

  & > div:first-of-type {
    width: calc(780px * var(--scale-x));
    & p {
      font-size: calc(32px * var(--scale-x)); 
      line-height: calc(44px * var(--scale-x)); 
      margin-bottom: calc(40px * var(--scale-y)); 
      & sup {
        font-size: x-small;
      }
    }
  }

  .tap-img {
    width: calc(214px * var(--scale-x)); 
  }

  h3 {
    font-size: calc(40px * var(--scale-x));
    text-align: center;
    margin-bottom: calc(50px * var(--scale-y)); 

    & sup {
        font-size: x-small;
      }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(170px * var(--scale-y)); 
  display: flex;
  flex-direction: row;
  justify-content: start;

  & p {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    letter-spacing: calc(1.2px * var(--scale-x)); 
    color: #4d4d4f;
    font-size: calc(23px * var(--scale-x)); 
    line-height: calc(34px * var(--scale-x)); 
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

  & > div:first-child {
    width:100%;
  }
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
  gap: calc(50px * var(--scale-x)); 
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
    width: calc(294.83px * var(--scale-x)); 
    height: calc(274.92px * var(--scale-y)); 
    clip-path: polygon(100% 0, 100% 85%, 85% 100%, 0 100%, 0 0);
    overflow: hidden;

    & img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: calc(60px * var(--scale-y)); 
    }

    & button {
      font-size: calc(31px * var(--scale-x)); 
      line-height: calc(35px * var(--scale-x)); 
      width: inherit;
      height: inherit;
      background-color: transparent;
      border: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      & p {
        width: calc(200px * var(--scale-x)); 

        & sub {
          font-size: x-small;
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
  width: calc(757.76px * var(--scale-x)); 
  height: calc(706.59px * var(--scale-y)); 
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
    width: calc(578px * var(--scale-x)); 
  }

  & .title {
    font-size: calc(52px * var(--scale-x)); 
    line-height: calc(53px * var(--scale-x)); 
    margin-bottom: calc(20px * var(--scale-y)); 

    & sub {
      font-size: x-small;
    }
  }

  & .content {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    font-size: calc(32px * var(--scale-x)); 
    line-height: calc(44px * var(--scale-x)); 
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
    width: calc(30.74px * var(--scale-x)); 
    height: calc(30.74px * var(--scale-y)); 
    position: absolute;
    top: calc(40px * var(--scale-y)); 
    right: calc(40px * var(--scale-x)); 
  }
`;
