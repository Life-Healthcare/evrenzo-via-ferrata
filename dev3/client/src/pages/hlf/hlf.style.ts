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
  background: url("./assets/hlf/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: calc(110px * var(--scale-x)); // 5.5rem;
  padding-right: calc(110px * var(--scale-x)); // 5.5rem;
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
`;

export const Main = styled.main`
  margin-top: calc(70px * var(--scale-y)); // 3.5rem;
  display: flex;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: calc(1.2px * var(--scale-x)); // 0.06rem;
  gap: calc(100px * var(--scale-x)); // 5rem;

  & h3 {
    font-size: calc(32px * var(--scale-x)); // 1.6rem;
    font-weight: bold;
    margin-bottom: calc(20px * var(--scale-y)); // 1rem;
  }

  & sup {
    font-size: x-small;
  }

  & p {
    font-size: calc(32px * var(--scale-x)); // 1.6rem;
    line-height: calc(44px * var(--scale-y)); // 2.2rem;
    margin-bottom: calc(20px * var(--scale-y)); // 1rem;
    & ul {
      list-style-type: none;
      & span {
        color: forestgreen;
      }
    }
    & .dashed {
      list-style-type: none;
    }
  }

  & > div:first-of-type {
    width: calc(912px * var(--scale-x)); // 45.6rem;

    & img {
      margin-bottom: calc(20px * var(--scale-y)); // 1rem;
    }

    & .smaller {
      margin-top: calc(60px * var(--scale-y)); // 3rem;

      & ul {
        list-style-type: none;
      }
      & p {
        font-weight: lighter;
        font-size: calc(23px * var(--scale-x)); // 1.15rem;
        line-height: calc(34px * var(--scale-x)); // 1.7rem;
      }
    }
  }

  & > div:last-child {
    & .rectangle {
      background-size: calc(342px * var(--scale-x)) calc(183px * var(--scale-y)); // 342px 183px;
      background-color: #40146e;
      width: calc(342px * var(--scale-x));
      height: calc(183px * var(--scale-y));
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem;
      padding: 0 calc(20px * var(--scale-x)); // 0 1rem;
      animation: ${fadeUp} 1s forwards;
      opacity: 0;

      & img {
        margin-left: calc(10px * var(--scale-x)); // 0.5rem;
        margin-right: calc(10px * var(--scale-x)); // 0.5rem;
        margin-top: calc(10px * var(--scale-y)); // 0.5rem;
        margin-bottom: calc(10px * var(--scale-y)); // 0.5rem;
      }

      &.text1 {
        animation-delay: 0.5s;
      }
      &.text2 {
        animation-delay: 1s;
      }
      &.text3 {
        animation-delay: 1.5s;
      }
    }

    & > div {
      gap: calc(40px * var(--scale-x)); // 2rem;

      & > div:first-child {
        width: calc(520px * var(--scale-x)); // 26rem;
      }

      & > div:last-child {
        font-family: "Trade Gothic LT Std Extended";
        font-size: calc(26px * var(--scale-x)); // 1.3rem;
        line-height: calc(29px * var(--scale-y)); // 1.45rem;

        color: #fff;
        text-align: center;

        & > div {
          gap: calc(10px * var(--scale-x)); // 0.5rem;
          display: grid;
          align-items: center;
          text-align: center;
          margin-top: calc(60px * var(--scale-y)); // 3rem;

          & img {
            margin: 0 auto;
          }
        }
      }
    }

    & > div:last-child {
      flex-direction: column;
      gap: calc(10px * var(--scale-x)); // 0.5rem;

      & > p:first-child {
        width: calc(788px * var(--scale-x)); // 39.4rem;
        margin-top: calc(60px * var(--scale-y)); // 3rem;
      }

      & > p:last-child {
        width: calc(671px * var(--scale-x)); // 32.3rem;
        font-weight: lighter;
        font-size: calc(23px * var(--scale-x)); // 1.15rem;
        line-height: calc(34px * var(--scale-y)); // 1.7rem;
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
  align-items: start;
`;

export const Animation = styled.div`
  opacity: 0;
  animation: ${fadeUp} 1s forwards;

  .leftContentImg {
	  width: calc(852px * var(--scale-x));
	  height: calc(331px * var(--scale-y));
  }
`;
