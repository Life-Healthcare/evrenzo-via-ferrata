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
  background: url("./assets/surmounting-the-impossible/background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  padding-left: calc(90px * var(--scale-x));
  padding-top: calc(128px * var(--scale-y));

  &:-webkit-scrollbar {
    display: none;
  }

  .title {
    width: calc(1146px * var(--scale-x) * 1);
  }
  .leftContent1 {
    width: calc(897px * var(--scale-x) *1);
  }
  .leftContent2 {
    width: calc(742px * var(--scale-x) * 1);
  }
  .leftContent3 {
    width: calc(829px * var(--scale-x) * 1);
  }
  .rightContent1 {
    width: calc(742px * var(--scale-x) * 1);
  }
  .rightContent2 {
    width: calc(804px * var(--scale-x) * 1);
  }
  .rightContent3 {
    width: calc(648px * var(--scale-x) * 1);
  }
  .footer1 {
    width: calc(1424px * var(--scale-x) * 1);
  }
  .footer2 {
    width: calc(496px * var(--scale-x) * 1);
  }


`;

export const Header = styled.div`
  & img {
    margin: calc(20px * var(--scale-x));
    margin-left: 0;
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
    margin-top: calc(20px * var(--scale-y));
    margin-right: calc(20px * var(--scale-x));
    margin-right: calc(20px * var(--scale-y));
    margin-left: 0;
  }

  & div:first-child {
    & div:first-child {
      & img {
        margin-top: calc(54px * var(--scale-y));
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
  bottom: calc(80px * var(--scale-x));
  display: flex;
  flex-direction: row;
  justify-content: start;
  & div:first-child {
    & div:first-child {
      & img {
        margin-bottom: calc(20px * var(--scale-y));
      }
    }

    & div:nth-child(2) {
      & img {
        margin-top: calc(16px * var(--scale-y));
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
  align-items: center;
`;

export const Animation = styled.div`
  opacity: 0;
  animation: ${fadeUp} 1s forwards;
`;
