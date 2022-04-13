import React from "react";
import {
  Section,
  Header,
  Main,
  Left,
  Footer,
} from "@/pages/hlf-pathway-in-action/hlf-pathway-in-action.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  const imgPath = "./assets/hlf-pathway-in-action";
  return (
    <Section>
      <Header>
        <p>See the HIF pathway in action</p>
      </Header>
      <Main>
        <div>
          <video poster={`${imgPath}/poster.png`}>
            {/* <source src="Evrenzo_MOA.mp4" type="video/mp4"> */}
          </video>
        </div>
      </Main>
      <Footer>
        <Left>
          <div>
            <img src={`${imgPath}/footer.png`} alt="" />
          </div>
        </Left>
      </Footer>
      <Nav back={-1} />
    </Section>
  );
}
