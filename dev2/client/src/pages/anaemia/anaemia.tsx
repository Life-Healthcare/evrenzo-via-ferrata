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
  Iframe,
} from "@/pages/anaemia/anaemia.style";
import Nav from "@/components/nav/nav";
import { Modal } from "@/components/modal/modal";

export default function LivingAtHigh() {
  const [pdfIsShown, setPdfIsShown] = React.useState(false);
  const imgPath = "./assets/anaemia";
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
            <Iframe
              src={`./assets/evrenzo-epar-product-information_en.pdf#toolbar=0`}
            />
            <button onClick={() => hideCartHandler()}>X</button>
          </Card>
        </Modal>
      )}
      <Section>
        <Header>
          <p>What this means for anaemia of CKD</p>
        </Header>
        <Main>
          <Left>
            <Animation>
              <p>
                The discovery of HIF provided a central cellular pathway with
                far-ranging implications for human physiology, disease states,
                and medicine.<sup>1</sup>
              </p>
              <p>
                Patients with chronic kidney disease (CKD) often suffer from
                anaemia due to:<sup>2-6</sup>
                <ul className="dashed">
                  <li>- Reduced oxygen sensing</li>
                  <li>- Reduced EPO production</li>
                  <li>
                    - Chronic inflammation resulting in increased hepcidin
                    levels
                  </li>
                  <li>- Iron deficiency</li>
                </ul>
              </p>
              <p>
                EPO is produced by cells in the kidney and is essential for
                controlling the formation of red blood cells, through the HIF
                pathway.<sup>1</sup>
              </p>
              <p>
                The HIF pathway is therefore a target for new treatments to
                manage anaemia of CKD.
              </p>
            </Animation>
            <Animation className="bold">
              <p>
                To find out how patients with anaemia of CKD are benefiting from
                a new class of treatment, take the next step on the EVRENZO Via
                Ferrata.
              </p>
            </Animation>
            <Animation className="smaller">
              <p>
                <ul>
                  <li>
                    1. https://www.nobelprize.org/prizes/medicine/2019/summary/
                    (accessed April 2022)
                  </li>
                  <li>
                    2. Wenger RH, Hoogewijs D. Am J Physiol Renal Physiol.
                    2010;298(6):Fl287-Fl296.
                  </li>
                  <li>
                    3. Fishbane S, Spinowitz B. Am J Kidney Dis.
                    2018;71(3):423-435.
                  </li>
                  <li>
                    4. Babitt JL, Lin HY. J Am Soc Nephrol.
                    2012;(10)23:1631-1634.
                  </li>
                  <li>
                    5. Peyssonnaux C, Nizet V, Johnson RS. Cell Cycle. 2008;
                    (1)7:28-32.
                  </li>
                  <li>
                    6. Kaplan JM, Sharma N, Dikdan S. Int J Mol Sci.
                    2018;19(2):389.
                  </li>
                </ul>
              </p>
            </Animation>
          </Left>
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
