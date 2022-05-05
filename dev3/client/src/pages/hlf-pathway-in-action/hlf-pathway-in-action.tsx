import React from "react";
import {
  Section,
  Header,
  Main,
  Left,
  Footer,
  Card,
} from "@/pages/hlf-pathway-in-action/hlf-pathway-in-action.style";
import Nav from "@/components/nav/nav";
import { Modal } from "@/components/modal/modal";
import LegalPdf from "@/pdf/pdf";

export default function LivingAtHigh() {
  const [pdfIsShown, setPdfIsShown] = React.useState(false);
  const imgPath = "./assets/hlf-pathway-in-action";

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
            <LegalPdf prefix="./assets/legal-pdf" pages={53}/>
            <button onClick={() => hideCartHandler()}>X</button>
          </Card>
        </Modal>
      )}
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
            <div onClick={showCartHandler}>
              <img src={`${imgPath}/footer.png`} alt="" />
            </div>
          </Left>
        </Footer>
        <Nav back={-1} />
      </Section>
    </>
  );
}
