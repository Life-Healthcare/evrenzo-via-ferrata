import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/evrenzo-at-work/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: 4.5rem;
  padding-top: 7.4rem;

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
  margin-top: 2rem;
  display: flex;
  justify-content: start;
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

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
