import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/evrenzo-at-work/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: calc(90px * var(--scale-x)); // 4.5rem;
  padding-right: calc(90px * var(--scale-x)); // 4.5rem;
  padding-top: calc(148px * var(--scale-y)); // 7.4rem;

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Main = styled.main`
  margin-top: calc(460px * var(--scale-x)); // 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #4d4d4f;
  text-align: center;

  & h1 {
    font-size: calc(52px * var(--scale-x)); // 2.6rem;
    line-height: calc(66px * var(--scale-y)); // 3.3rem;
  }
  & h2 {
    font-size: calc(42px * var(--scale-x)); // 2.1rem;
    line-height: calc(66px * var(--scale-y)); // 3.3rem;
  }

  & p {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    margin-top: calc(50px * var(--scale-y)); //2.5rem;
    width: calc(866px * var(--scale-x)); // 43.3rem;
    font-size: calc(32px * var(--scale-x)); // 1.6rem;
    line-height: calc(44px * var(--scale-y)); // 2.2rem;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(60px * var(--scale-y)); // 3rem;
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
        margin-bottom: calc(20px * var(--scale-y)); // 1rem;
      }
    }
  }
`;
