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
  padding-left: 5.5rem;
  padding-right: 5.5rem;
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
  gap: 5rem;

  & h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & sup {
    font-size: medium;
  }

  & p {
    font-size: 1.6rem;
    line-height: 2.2rem;
    margin-bottom: 1rem;
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
    width: 45.6rem;

    & img {
      margin-bottom: 1rem;
    }

    & .smaller {
      margin-top: 3rem;

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

  & > div:last-child {
    & .rectangle {
      background-size: 342px 183px;
      background-color: #40146e;
      width: 342px;
      height: 183px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem;
      padding: 0 1rem;
      animation: ${fadeUp} 1s forwards;
      opacity: 0;

      & img {
        margin: 0.5rem;
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
      gap: 2rem;

      & > div:first-child {
        width: 26rem;
      }

      & > div:last-child {
        font-family: "Trade Gothic LT Std Extended";
        font-size: 1.3rem;
        line-height: 1.45rem;

        color: #fff;
        text-align: center;

        & > div {
          gap: 0.5rem;
          display: grid;
          align-items: center;
          text-align: center;
          margin-top: 3rem;

          & img {
            margin: 0 auto;
          }
        }
      }
    }

    & > div:last-child {
      flex-direction: column;
      gap: 0.5rem;

      & > p:first-child {
        width: 39.4rem;
        margin-top: 3rem;
      }

      & > p:last-child {
        width: 32.3rem;
        font-weight: lighter;
        font-size: 1.15rem;
        line-height: 1.7rem;
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
`;
