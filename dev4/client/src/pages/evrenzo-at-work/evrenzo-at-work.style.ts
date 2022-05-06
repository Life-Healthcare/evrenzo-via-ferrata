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
  width: auto;
  min-width: 100%;
  max-width: calc(1848px * var(--scale-x)); // 1848px;
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    width: 100%;
    & video {
      display: block;
      width: 100%;
	  max-height: calc(1041px * var(--scale-y));
	  cursor: pointer;
    }
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
