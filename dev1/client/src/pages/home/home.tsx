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
            <img src={`${imgPath}/header1.png`} className="header1" />
          </div>
        </Animation>
        <Animation>
          <div>
            <img src={`${imgPath}/header2.png`} className="header2" />
          </div>
        </Animation>
        <Animation>
          <div>
            <img src={`${imgPath}/logo.png`} className="logo" />
          </div>
        </Animation>
      </Header>
      <Footer>
        <Left>
          <div>
            <img src={`${imgPath}/footer.png`} alt="" className="footer"/>
          </div>
        </Left>
      </Footer>
      <Nav back={-1} forward="/living-at-high" />
    </Section>
  );
}
