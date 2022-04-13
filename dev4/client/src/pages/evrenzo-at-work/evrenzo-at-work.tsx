import React from "react";
import {
  Section,
  Header,
  Main,
} from "@/pages/evrenzo-at-work/evrenzo-at-work.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  const imgPath = "./assets/evrenzo-at-work";
  return (
    <Section>
      <Header>
        <p>See EVRENZO at work</p>
      </Header>
      <Main>
        <div>
          <video poster={`${imgPath}/poster.png`}>
            {/* <source src="Evrenzo_MOA.mp4" type="video/mp4"> */}
          </video>
        </div>
      </Main>
      <Nav back={-1} forward="/congratulations"/>
    </Section>
  );
}
