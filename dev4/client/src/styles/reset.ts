import { createGlobalStyle } from "styled-components/macro";
import { fluidRange } from "polished";
import vars from "./vars";

export default createGlobalStyle`
:root {
    --artwork-width: 2160;
    --artwork-height: 1620;
    --device-width: 1080;
    --device-height: 790;
    --scale-x: calc(var(--device-width) / var(--artwork-width));
    --scale-y: calc(var(--device-height) / var(--artwork-height));
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    /* Disable overscroll history navigation (touch gesture) */
    overscroll-behavior: none;
    overflow: hidden;
	user-select: none;
  }

  html {
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: `${vars.rootSize * 0.8}px`,
        toSize: `${vars.rootSize}px`,
      },
      `${vars.responsiveMin}px`,
      `${vars.responsiveMax}px`
    )};
    font-family: ${vars.fontBody};
    font-weight: normal;
    line-height: 1.2;
    background-color: #1e1e1e;
    color: #fefefe;
  }

  input, textarea, button {
    background-color: #fefefe;
    color: #1e1e1e;
  }

  button {
    border: none;
    padding: 0.25em 0.5em;
    cursor: pointer;
  }

  svg, img {
    pointer-events: none;
    user-select: none;
    height: auto;
  }
`;
