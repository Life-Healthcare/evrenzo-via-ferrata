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
} from "@/pages/sustaining-life/sustaining-life.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  const imgPath = "./assets/sustaining-life";
  return (
    <Section>
      <Header>
        <p>A fundamental role in sustaining life</p>
      </Header>
      <Main>
        <Left>
          <Animation>
            <div>
              <img src={`${imgPath}/content.png`} />
            </div>
          </Animation>
        </Left>
      </Main>
      <Footer>
        <FlexRow>
          <Left>
            <p>
              The Nobel Prize in Physiology or Medicine 2019 was awarded jointly
              to three Professors working in three different disciplines - Sir
              Peter J. Ratcliffe (a nephrologist), Professor Gregg L. Semenza (a
              paediatric geneticist) and Professor William G. Kaelin Jr (an
              oncologist).<sup>1</sup>
            </p>
            <p>
              The award was for their discovery about how cells sense and adapt
              to oxygen availability.<sup>1</sup>
            </p>
          </Left>
          <Right>
            <p>
              Oxygen plays a fundamental role in sustaining life, but the
              molecular mechanisms underlying how cells adapt to variations in
              oxygen remained elusive until recently.<sup>1</sup>
            </p>
            <p>
              Working separately and then combining their knowledge, the trio
              revealed the process through which changes in gene expression in
              response to oxygen levels alter cell metabolism, tissue
              remodelling and physiology.<sup>1</sup>
            </p>
          </Right>
        </FlexRow>
        <FlexRow>
          <p>1. https://www.nobelprize.org/prizes/medicine/2019/summary/</p>
        </FlexRow>
      </Footer>
      <Nav back={-1} forward="/surmounting-the-impossible" />
    </Section>
  );
}
