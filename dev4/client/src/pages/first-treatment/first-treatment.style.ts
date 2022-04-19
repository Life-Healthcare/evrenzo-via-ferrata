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
  color?: string;
}

export const Section = styled.section`
  background: url("./assets/first-treatment/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: calc(110px * var(--scale-x)); // 5.5rem;
  padding-top: calc(128px * var(--scale-y)); // 6.4rem;

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  color: #007a33;
  font-size: calc(52px * var(--scale-x)); // 2.6rem;
  line-height: calc(46px * var(--scale-y)); // 2.3rem;
  letter-spacing: calc(1.6px * var(--scale-x)); // 0.08rem;
  font-weight: bold;
  & sup {
    line-height: 0;
    font-size: medium;
  }
`;

export const Main = styled.main`
  margin-top: calc(70px * var(--scale-y)); // 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: calc(1.2px * var(--scale-x)); // 0.06rem;
  gap: calc(48px * var(--scale-x)); // 2.4rem;

  & .item {
    aspect-ratio: 1 / 1;
    display: block;
    width: calc(854.34px * var(--scale-x)); // 42.717rem;
    height: calc(156px * var(--scale-y)); // 7.8rem;
    clip-path: polygon(6% 0, 100% 0%, 94% 100%, 0% 100%);
    overflow: hidden;
    font-family: "Trade Gothic LT Std Extended";
    background-image: url("./assets/first-treatment/tap_ico.png");
    background-size: calc(58px * var(--scale-x)) calc(100px * var(--scale-y));
    background-repeat: no-repeat;
    background-position: calc(100px * var(--scale-x))
      calc(30px * var(--scale-y)); // 5rem 1.5rem;

    & button {
      font-size: calc(30px * var(--scale-x)); // 1.5rem;
      line-height: calc(3.6px * var(--scale-y)); // 1.8rem;
      width: inherit;
      height: inherit;
      background-color: transparent;
      border: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      & p {
        width: calc(585px * var(--scale-x)); // 29.25rem;
        text-align: left;
        margin-left: calc(140px * var(--scale-x)); // 7rem;
        margin-top: calc(8px * var(--scale-y)); // 0.4rem;
        line-height: calc(36px * var(--scale-x));

        & sup {
          line-height: 0;
          font-size: xx-small;
        }
      }
    }
  }

  & > div:first-of-type {
    width: calc(1720px * var(--scale-x)); // 86rem;
    & p {
      font-size: calc(32px * var(--scale-x)); // 1.6rem;
      line-height: calc(44px * var(--scale-y)); // 2.2rem;
      & sup {
        line-height: 0;
        font-size: x-small;
      }
    }
  }

  & > div:last-child {
    margin-top: calc(40px * var(--scale-y)); // 2rem;
    gap: calc(40px * var(--scale-x)); // 2rem;

    & > div:first-child {
      gap: calc(40px * var(--scale-x)); // 2rem;
      & .item:nth-child(1) {
        background-color: #007a33;
      }
      & .item:nth-child(2) {
        background-color: #43b02a;
      }
    }
    & > div:last-child {
      & .item:nth-child(1) {
        background-color: #ad1aac;
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(170px * var(--scale-y)); // 8.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: calc(1.2px * var(--scale-x)); // 0.06rem;
  color: #4d4d4f;
  font-size: calc(23px * var(--scale-x)); // 1.15rem;
  line-height: calc(34px * var(--scale-y)); // 1.7rem;
  & ul {
    list-style-type: none;
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

export const Card = styled.div<Props>`
  aspect-ratio: 1 / 1;
  width: calc(1417.94px * var(--scale-x)); // 70.897rem;
  height: calc(1179.68px * var(--scale-y)); // 58.984rem;
  position: relative;

  & img {
    width: calc(1417px * var(--scale-x)); // 70.897rem;
    height: calc(1180px * var(--scale-y)); // 58.984rem;
  }

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
    ${(Props) => `color: ${Props.color};`}
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
