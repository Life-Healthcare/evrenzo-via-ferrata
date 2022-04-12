import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/home-bg.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:-webkit-scrollbar {
    display: none;
  }
`;
