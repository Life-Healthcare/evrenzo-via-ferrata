import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/hlf-pathway-in-action/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: calc(90px * var(--scale-x)); // 4.5rem;
  padding-top: calc(148px * var(--scale-y)); // 7.4rem;

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
  margin-top: calc(40px * var(--scale-y)); // 2rem;
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: calc(1848px * var(--scale-x)); // 1848px;

  & video {
    display: block;
    width: 100%;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(60px * var(--scale-y)); // 3rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  & div:first-child {
    & div:first-child {
      & img {
        margin-bottom: calc(20px * var(--scale-y)); // 1rem;
        width: calc(496px * var(--scale-x));
        height: calc(108px * var(--scale-y));
      }
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Card = styled.div`
  aspect-ratio: 1 / 1;
  width: calc(1417.94px * var(--scale-x)); // 70.897rem;
  height: calc(1179.68px * var(--scale-y)); // 58.984rem;
  position: relative;

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

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  /* margin-top: var(--gap); */
  border: none;
  display: block;
`;
