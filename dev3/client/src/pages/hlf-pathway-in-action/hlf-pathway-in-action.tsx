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
        <video
          poster={`${imgPath}/poster.png`}
          src="https://mz-website.uat.finervision.com/assets/@cms/videos/test.mp4"
		  playsInline
          controls
        ></video>
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
