import React from "react";
import {
  Section,
  Header,
  Animation,
  Left,
  Footer,
} from "@/pages/home/home.style";
import Nav from "@/components/nav/nav";

export default function Home() {
  const imgPath = "./assets/home";
  return (
    <Section>
      <Header>
        <Animation>
          <div>
            <img src={`${imgPath}/header1.png`} />
          </div>
        </Animation>
        <Animation>
          <div>
            <img src={`${imgPath}/header2.png`} />
          </div>
        </Animation>
        <Animation>
          <div>
            <img src={`${imgPath}/logo.png`} />
          </div>
        </Animation>
      </Header>
      <Footer>
        <Left>
          <div>
            <img src={`${imgPath}/footer.png`} alt="" />
          </div>
        </Left>
      </Footer>
      <Nav back={-1} forward="/living-at-high" />
    </Section>
  );
}
