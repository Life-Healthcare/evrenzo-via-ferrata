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
  Card,
} from "@/pages/surmounting-the-impossible/surmounting-the-impossible.style";
import Nav from "@/components/nav/nav";
import { Modal } from "@/components/modal/modal";
import LegalPdf from "@/pdf/pdf";

export default function LivingAtHigh() {
  const [pdfIsShown, setPdfIsShown] = React.useState(false);
  const imgPath = "./assets/surmounting-the-impossible";
  const showCartHandler = () => {
    console.log("ff");
    setPdfIsShown(true);
  };

  const hideCartHandler = () => {
    setPdfIsShown(false);
  };
  return (
    <>
      {pdfIsShown && (
        <Modal onClose={() => hideCartHandler()}>
          <Card>
            <LegalPdf prefix="./assets/legal-pdf" pages={53} />
            <button onClick={() => hideCartHandler()}>X</button>
          </Card>
        </Modal>
      )}
      <Section>
        <Header>
          <FlexRow>
            <img src={`${imgPath}/title.png`} className="title" />
          </FlexRow>
        </Header>
        <Main>
          <Left>
            <Animation>
              <div>
                <img
                  src={`${imgPath}/left-content1.png`}
                  className="leftContent1"
                />
              </div>
            </Animation>
            <Animation>
              <img
                src={`${imgPath}/left-content2.png`}
                className="leftContent2"
              />
            </Animation>
            <Animation>
              <img
                src={`${imgPath}/left-content3.png`}
                className="leftContent3"
              />
            </Animation>
          </Left>
          <Right>
            <Animation>
              <img
                src={`${imgPath}/right-content1.png`}
                className="rightContent1"
              />
            </Animation>
            <Animation>
              <img
                src={`${imgPath}/right-content2.png`}
                className="rightContent2"
              />
            </Animation>
            <Animation>
              <img
                src={`${imgPath}/right-content3.png`}
                className="rightContent3"
              />
            </Animation>
          </Right>
        </Main>
        <Footer>
          <Left>
            <div>
              <img src={`${imgPath}/footer1.png`} alt="" className="footer1" />
            </div>
            <div onClick={showCartHandler}>
              <img src={`${imgPath}/footer2.png`} alt="" className="footer2" />
            </div>
          </Left>
        </Footer>
        <Nav back={-1} />
      </Section>
    </>
  );
}
