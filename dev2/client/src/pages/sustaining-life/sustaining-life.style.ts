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
  background: url("./assets/sustaining-life/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: calc(110px * var(--scale-x));
  padding-right: calc(110px * var(--scale-x));
  padding-top: calc(128px * var(--scale-y));

  &:-webkit-scrollbar {
    display: none;
  }

  .content {
    width: calc(1094px * var(--scale-x));
  }
`;

export const Header = styled.div`
  color: #007a33;
  font-size: calc(52px * var(--scale-x));
  line-height: calc(46px * var(--scale-x));
  letter-spacing: calc(1.2px * var(--scale-y));
  font-weight: bold;
  & img {
    margin-top: calc(20px * var(--scale-y));
    margin-bottom: calc(20px * var(--scale-y));
    margin-left: calc(20px * var(--scale-x));
    margin-right: calc(20px * var(--scale-x));
  }

  & div {
    justify-content: start;
    align-items: flex-start;
    gap: calc(160px * var(--scale-x));
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: calc(48px * var(--scale-x));
  color: #4d4d4f;

  & img {
    margin-top: calc(20px * var(--scale-y));
    margin-bottom: calc(20px * var(--scale-y));
    /* margin-left: calc(20px * var(--scale-x));
    margin-right: calc(20px * var(--scale-x)); */
  }

  & sup {
    font-size: medium;
  }

  & div:first-child {
    & div:first-child {
      & img {
        margin-top: calc(20px * var(--scale-y));
      }
    }
    & div:nth-child(2) {
      & img {
        margin-top: calc(12px * var(--scale-y));
      }
    }
    & div:nth-child(3) {
      & img {
        margin-top: calc(10px * var(--scale-y));
      }
    }
  }

  & h3 {
    font-size: calc(32px * var(--scale-x));
    text-align: left;
    margin-top: calc(50px * var(--scale-y));
    font-family: "Trade Gothic LT Std Extended";
    line-height: calc(44px * var(--scale-x));

    & sup {
      font-size: x-small;
    }
  }

  & p {
    width: calc(333px * var(--scale-x));
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    font-size: calc(23px * var(--scale-x));
    line-height: calc(34px * var(--scale-y));
	position: absolute;
    top: 50%;
    right: 0;
	transform: translate(calc(373px * var(--scale-x)), -50%);

  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(170px * var(--scale-y));
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: calc(0.8px * var(--scale-x));
  gap: calc(40px * var(--scale-x));

  & div:first-child {
    gap: calc(120px * var(--scale-x));

    & p {
      font-size: calc(32px * var(--scale-x));
      line-height: calc(44px * var(--scale-y));
      & sup {
        font-size: x-small;
      }
    }

    & div {
      gap: calc(40px * var(--scale-x));
    }

    & div:first-child {
      width: calc(900px * var(--scale-x));
    }
    & div:last-child {
      width: calc(897px * var(--scale-x));
    }
  }

  & div:nth-child(2) {
    font-size: calc(23px * var(--scale-x));
    align-items: start;
    justify-content: start;
  }

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
