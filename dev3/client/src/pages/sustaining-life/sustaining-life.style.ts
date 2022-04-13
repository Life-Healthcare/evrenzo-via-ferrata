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
  letter-spacing: 0.06rem;
  font-weight: bold;
  & img {
    margin: 1rem;
  }

  & div {
    justify-content: start;
    align-items: flex-start;
    gap: 8rem;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 2.4rem;

  & img {
    margin: 1rem;
  }

  & div:first-child {
    & div:first-child {
      & img {
        margin-top: 2.7rem;
      }
    }
    & div:nth-child(2) {
      & img {
        margin-top: 0.6rem;
      }
    }
    & div:nth-child(3) {
      & img {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #4d4d4f;
  font-family: "Trade Gothic LT Std";
  font-weight: lighter;
  letter-spacing: 0.04rem;
  gap: 2rem;

  & div:first-child {
    gap: 6rem;

    & p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      & sup {
        font-size: medium;
      }
    }

    & div {
      gap: 2rem;
    }

    & div:first-child {
      width: 45rem;
    }
    & div:last-child {
      width: 44.85rem;
    }
  }

  & div:nth-child(2) {
    font-size: 1.15rem;
    align-items: start;
    justify-content: start;
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
