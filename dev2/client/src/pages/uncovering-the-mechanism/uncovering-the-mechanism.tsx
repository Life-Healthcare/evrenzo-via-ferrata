import React from "react";
import {
  Section,
  Header,
  FlexRow,
  Main,
  Animation,
  Left,
  Right,
  Footer,
  Grid,
} from "@/pages/uncovering-the-mechanism/uncovering-the-mechanism.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  return (
    <Section>
      <Header>
        <p>Uncovering the mechanism</p>
      </Header>
      <Main>
        <Left>
          <Animation>
            <p>
              When low oxygen (hypoxia) is detected, the carotid body
              communicates rapidly with the brain to raise the respiratory rate.
              <sup>1</sup>
            </p>
            <p>
              In the longer term, the body adapts physiologically to hypoxia by
              raising levels of erythropoietin (EPO), which increases red blood
              cell production (erythropoiesis). But how this process itself is
              controlled has been a mystery.<sup>1</sup>
            </p>
            <p>
              These separate lines of investigation converged in the discovery
              of the HIF mechanism. The Nobel Laureates had elucidated the
              oxygen-sensing mechanism and how it worked.
            </p>
          </Animation>
        </Left>
        <Right>
          <Animation>
            <Grid>
              <div className="item">
                <button>
                  <p>EPO gene</p>
                </button>
              </div>
              <div className="item">
                <button>
                  <p>O2 sensing mechanism</p>
                </button>
              </div>
              <div className="item"><img src="./assets/uncovering-the-mechanism/tap-to-select.png"/></div>
              <div className="item">
                <button>
                  <p>HIF</p>
                </button>
              </div>
              <div className="item">
                <button>
                  <p>VHL and HIF-1α</p>
                </button>
              </div>
              <div className="item">
                <button>
                  <p>VHL</p>
                </button>
              </div>
              <div className="item"></div>
              <div className="item">
                <button>
                  <p>HIF-PHIs identified</p>
                </button>
              </div>
              <div className="item">
                <button>
                  <p>HIF-PH</p>
                </button>
              </div>
              <svg
                className="grid-lines"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3 3"
              >
                <polyline
                  points="0.5,0.5 0.5,1.5 1.5,1.5 1.5,0.5 1.5,1.5 2.5,1.5 2.5,2.5 1.5,2.5 2.5,2.5 1.5,1.5"
                  stroke-width="0.01"
                  stroke="currentColor"
                  fill="none"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </Grid>
          </Animation>
        </Right>
      </Main>
      <Footer>
        <FlexRow>
          <p>1. https://www.nobelprize.org/prizes/medicine/2019/summary/</p>
        </FlexRow>
      </Footer>
      <Nav back={-1} forward="/surmounting-the-impossible" />
    </Section>
  );
}
