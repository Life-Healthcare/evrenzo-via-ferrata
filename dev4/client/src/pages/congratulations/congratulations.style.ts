import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/evrenzo-at-work/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
  padding-top: 7.4rem;

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Main = styled.main`
  margin-top: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #4d4d4f;
  text-align: center;

  & h1 {
    font-size: 2.6rem;
    line-height: 3.3rem;
  }
  & h2 {
    font-size: 2.1rem;
    line-height: 3.3rem;
  }

  & p {
    font-family: "Trade Gothic LT Std";
    font-weight: lighter;
    margin-top: 2.5rem;
    width: 43.3rem;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  & div:first-child {
    & div:first-child {
      & img {
        margin-bottom: 1rem;
      }
    }
  }
`;
