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
import sessionManager from "@/services/session-manager";

export default function LivingAtHigh() {
  React.useEffect(() => {
    sessionManager.page("page-1");
  }, []);
  return (
    <Section>
      <Header>
        <FlexRow>
          <img src="./assets/living-at-high/title.png" className="title" />
        </FlexRow>
      </Header>
      <Main>
        <Left>
          <Animation>
            <div>
              <img
                src="./assets/living-at-high/left-content1.png"
                className="leftContent1"
              />
            </div>
          </Animation>
          <Animation>
            <img
              src="./assets/living-at-high/left-content2.png"
              className="leftContent2"
            />
          </Animation>
          <Animation>
            <img
              src="./assets/living-at-high/left-content3.png"
              className="leftContent3"
            />
          </Animation>
        </Left>
        <Right>
          <Animation>
            <img
              src="./assets/living-at-high/right-content.png"
              className="rightContent1"
            />
          </Animation>
        </Right>
      </Main>
      {/* <Footer>
        <Left>
          <div>
            <img src="./assets/living-at-high/footer.png" alt="" className="footer"/>
          </div>
        </Left>
      </Footer> */}
      <Nav back={-1} forward="/surmounting-the-impossible" />
    </Section>
  );
}
