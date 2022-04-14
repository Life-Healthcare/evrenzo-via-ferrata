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
  background: url("./assets/living-at-high/background.png");
  background-size: cover;
  width: calc(2048px * var(--scale-x));
  height: calc(1536px * var(--scale-y));
  display: inline-block;
  padding-left: calc(90px * var(--scale-x));
  padding-top: calc(128px * var(--scale-y));

  &:-webkit-scrollbar {
    display: none;
  }

  .title {
    width: calc(1146px * var(--scale-x) * 0.9);
  }

  .leftContent1 {
    width: calc(897px * var(--scale-x) * 0.9);
  }

  .leftContent2 {
    width: calc(844px * var(--scale-x) * 0.9);
  }

  .leftContent3 {
    width: calc(895px * var(--scale-x) * 0.9);
  }

  .rightContent1 {
    width: calc(811px * var(--scale-x) * 0.9);
  }

  .footer {
    width: calc(758px * var(--scale-x) * 0.9);
  }
`;

export const Header = styled.div`
  & img {
    margin: calc(20px * var(--scale-x));
  }

  & div {
    justify-content: start;
    align-items: flex-start;
    gap: calc(160px * var(--scale-x));
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: start;
  gap: calc(48px * var(--scale-x));

  & img {
    margin: calc(20px * var(--scale-x));
  }

  & div:first-child {
    & div:first-child {
      & img {
        margin-top: calc(54px * var(--scale-y));
      }
    }
    & div:nth-child(2) {
      & img {
        margin-top: calc(40px * var(--scale-y));
      }
    }
    & div:nth-child(3) {
      & img {
        margin-top: calc(56px * var(--scale-y));
      }
    }
  }

  & div:last-child {
    & div:first-child {
      & img {
        margin-top: calc(54px * var(--scale-y));
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: calc(100px * var(--scale-x));
  display: flex;
  flex-direction: row;
  justify-content: start;
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
