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
              <h3>
                When oxygen levels are low<sup>2</sup>
              </h3>
              <img src={`${imgPath}/content.png`} className="content" />
			  <p>HIF, hypoxia-inducible factor; HRE, specific DNA sequences; OH, hydroxyl group; VHL, von Hippel-Lindau.</p>
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
              The award was for their discovery of how cells sense and adapt to
              oxygen availability.<sup>1</sup>
            </p>
          </Left>
          <Right>
            <p>
              Oxygen plays a fundamental role in sustaining life, but the
              molecular mechanisms underlying how cells adapt to variations in
              oxygen remained elusive until this discovery.<sup>1</sup>
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
          <ul>
            <li>
              1. https://www.nobelprize.org/prizes/medicine/2019/summary/
              (accessed April 2022)
            </li>
            <li>
              2. Mandl M, Depping R. Mol Med. 2014;20(1):215-20. doi:
              10.2119/molmed.2014.00032.
            </li>
          </ul>
        </FlexRow>
      </Footer>
      <Nav back={-1} forward="/uncovering-the-mechanism" />
    </Section>
  );
}
