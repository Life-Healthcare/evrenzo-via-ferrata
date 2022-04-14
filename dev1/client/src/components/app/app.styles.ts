import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    /* --artwork-width: 2048; */
    /* --artwork-height: 1536; */
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
    position: fixed;
    inset: 0;
    overflow: hidden;
  }

  html {
    font-size: 20px;
    font-family: Arial, sans-serif;
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
`;
