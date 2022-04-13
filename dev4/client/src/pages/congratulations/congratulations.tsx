import React from "react";
import {
  Section,
  Main,
  Footer,
} from "@/pages/congratulations/congratulations.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  const imgPath = "./assets/congratulations";
  return (
    <Section>
      <Main>
        <h1>CONGRATULATIONS</h1>
        <h2>You have successfully now completed the EVRENZO Via Ferrata</h2>
        <p>
          Thank you for your visit - we hope you enjoyed taking part. Please
          visit some of the other zones at the EVRENZO booth. If you would like
          to receive regular updates, speak to a representative who will take
          your details.
        </p>
      </Main>
      <Footer>
        <div>
          <img src={`${imgPath}/footer.png`} />
        </div>
      </Footer>

      <Nav back={-1} />
    </Section>
  );
}
