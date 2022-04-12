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
} from "@/pages/surmounting-the-impossible/surmounting-the-impossible.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  const imgPath = "./assets/surmounting-the-impossible";
  return (
    <Section>
      <Header>
        <FlexRow>
          <img src={`${imgPath}/title.png`} />
        </FlexRow>
      </Header>
      <Main>
        <Left>
          <Animation>
            <div>
              <img src={`${imgPath}/left-content1.png`} />
            </div>
          </Animation>
          <Animation>
            <img src={`${imgPath}/left-content2.png`} />
          </Animation>
          <Animation>
            <img src={`${imgPath}/left-content3.png`} />
          </Animation>
        </Left>
        <Right>
          <Animation>
            <img src={`${imgPath}/right-content1.png`} />
          </Animation>
          <Animation>
            <img src={`${imgPath}/right-content2.png`} />
          </Animation>
          <Animation>
            <img src={`${imgPath}/right-content3.png`} />
          </Animation>
        </Right>
      </Main>
      <Footer>
        <Left>
          <div>
            <img src={`${imgPath}/footer1.png`} alt="" />
          </div>
          <div>
            <img src={`${imgPath}/footer2.png`} alt="" />
          </div>
        </Left>
      </Footer>
      <Nav back={-1} />
    </Section>
  );
}
