import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 1rem;
  gap: -0.5rem;
`;

export const ParallelogramButton = styled.div`
  display: block;
  width: 155px;
  height: 100px;
  background-color: darkgreen;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  overflow: hidden;
  margin-left: -1.25rem;

  &:first-of-type {
    margin: 0;
  }

  & button {
    width: inherit;
    height: inherit;
    background-color: transparent;
    border: none;
    color: white;
  }
`;
