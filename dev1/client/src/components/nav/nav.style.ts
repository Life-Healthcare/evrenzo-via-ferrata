import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: calc(70px * var(--scale-x)); 
  gap: calc(-10px * var(--scale-x));

  .icon1, .icon2 {
    width: calc(46px * var(--scale-x));
    height: calc(46px * var(--scale-y));
  }
  
  .icon3 {
    width: calc(42px * var(--scale-x));
    height: calc(46px * var(--scale-y));
  }
`;

export const ParallelogramButton = styled.div`
  display: block;
  width: calc(197.49px * var(--scale-x));
  height: calc(127.41px * var(--scale-y));
  background-color: #004c2f;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  overflow: hidden;
  margin-left: calc(-38px * var(--scale-x));

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
