import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 3.5rem;
  gap: -0.5rem;
`;

export const ParallelogramButton = styled.div`
  display: block;
  width: 197.49px;
  height: 127.41px;
  background-color: #004c2f;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  overflow: hidden;
  margin-left: -1.9rem;

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
