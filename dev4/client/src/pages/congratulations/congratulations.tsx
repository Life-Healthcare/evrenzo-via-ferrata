import React from "react";
import {
  Section,
  Main,
  Footer,
  Card,
} from "@/pages/congratulations/congratulations.style";
import Nav from "@/components/nav/nav";
import { Modal } from "@/components/modal/modal";
import LegalPdf from "@/pdf/pdf";

export default function LivingAtHigh() {
  const [pdfIsShown, setPdfIsShown] = React.useState(false);
  const imgPath = "./assets/congratulations";
  const showCartHandler = () => {
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
        <Main>
          <h1>CONGRATULATIONS</h1>
          <h2>You have successfully now completed the EVRENZO Via Ferrata</h2>
          <p>
            Thank you for your visit - we hope you enjoyed taking part. Please
            visit some of the other zones at the EVRENZO booth. If you would
            like to receive regular updates, speak to a representative who will
            take your details.
          </p>
        </Main>
        <Footer>
          <div onClick={showCartHandler}>
            <img src={`${imgPath}/footer.png`} />
          </div>
        </Footer>

        <Nav back={-1} />
      </Section>
    </>
  );
}
