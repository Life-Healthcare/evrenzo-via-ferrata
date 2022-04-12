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
} from "@/pages/living-at-high/living-at-high.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  return (
    <Section>
      <Header>
        <FlexRow>
          <img src="./assets/living-at-high/title.png" />
        </FlexRow>
      </Header>
      <Main>
        <Left>
          <Animation>
            <div>
              <img src="./assets/living-at-high/left-content1.png" />
            </div>
          </Animation>
          <Animation>
            <img src="./assets/living-at-high/left-content2.png" />
          </Animation>
          <Animation>
            <img src="./assets/living-at-high/left-content3.png" />
          </Animation>
        </Left>
        <Right>
          <Animation>
            <img src="./assets/living-at-high/right-content.png" />
          </Animation>
        </Right>
      </Main>
      <Footer>
        <Left>
          <div>
            <img src="./assets/living-at-high/footer.png" alt="" />
          </div>
        </Left>
      </Footer>
      <Nav back={-1} forward="/surmounting-the-impossible" />
    </Section>
  );
}
