import { createGlobalStyle } from "styled-components/macro";
import { fluidRange } from "polished";
import vars from "./vars";

export default createGlobalStyle`
  @font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-Light.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-Bd2.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Bd2.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-LightObl.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-LightObl.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std Cn';
    src: url('/assets/fonts/TradeGothicLTStd-Cn18.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Cn18.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std Extended';
    src: url('/assets/fonts/TradeGothicLTStd-Extended.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Extended.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std Cn';
    src: url('/assets/fonts/TradeGothicLTStd-Cn18Obl.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Cn18Obl.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-BoldObl.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-BoldObl.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std Extended';
    src: url('/assets/fonts/TradeGothicLTStd-BoldExt.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-BoldExt.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-Bd2Obl.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Bd2Obl.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std Cn';
    src: url('/assets/fonts/TradeGothicLTStd-BdCn20.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-BdCn20.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-Obl.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Obl.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std';
    src: url('/assets/fonts/TradeGothicLTStd-Bold.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Trade Gothic LT Std Cn';
    src: url('/assets/fonts/TradeGothicLTStd-BdCn20Obl.woff2') format('woff2'),
        url('/assets/fonts/TradeGothicLTStd-BdCn20Obl.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
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
    position: fixed;
    inset: 0;
    overflow: hidden;
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
`;
