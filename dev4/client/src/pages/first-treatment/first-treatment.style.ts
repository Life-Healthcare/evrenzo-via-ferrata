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
  & sup {
    font-size: xx-large;
  }
`;

export const Main = styled.main`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: 0.06rem;
  gap: 2.4rem;

  & .item {
    aspect-ratio: 1 / 1;
    display: block;
    width: 42.717rem;
    height: 7.8rem;
    clip-path: polygon(6% 0, 100% 0%, 94% 100%, 0% 100%);
    overflow: hidden;
    font-family: "Trade Gothic LT Std Extended";
    background-image: url("./assets/first-treatment/tap_ico.png");
    background-repeat: no-repeat;
    background-position: 5rem 1.5rem;

    & button {
      font-size: 1.5rem;
      line-height: 1.8rem;
      width: inherit;
      height: inherit;
      background-color: transparent;
      border: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      & p {
        width: 29.25rem;
        text-align: left;
        margin-left: 7rem;
        margin-top: 0.4rem;

        & sup {
          font-size: medium;
        }
      }
    }
  }

  & > div:first-of-type {
    width: 86rem;
    & p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      & sup {
        font-size: medium;
      }
    }
  }

  & > div:last-child {
    margin-top: 2rem;
    gap: 2rem;

    & > div:first-child {
      gap: 2rem;
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
  bottom: 8.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: 0.06rem;
  color: #4d4d4f;
  font-size: 1.15rem;
  line-height: 1.7rem;
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
  width: 70.897rem;
  height: 58.984rem;
  position: relative;

  & > button {
	font-size: 2rem;
    text-align: end;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 2rem;
    height: 2rem;
    padding: 0;
	${(Props) => `color: ${Props.color};`}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
