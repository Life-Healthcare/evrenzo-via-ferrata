import React from "react";
import {
  Section,
  Header,
  FlexRow,
  Main,
  Animation,
  Left,
  Right,
} from "@/pages/hlf/hlf.style";
import Nav from "@/components/nav/nav";

export default function LivingAtHigh() {
  const imgPath = "./assets/hlf";
  return (
    <Section>
      <Header>
        <p>The role of the HIF pathway in anaemia of CKD</p>
      </Header>
      <Main>
        <Left>
          <Animation>
            <h3 className="doubleMarginBottom">
              The HIF (hypoxia-inducible factor) pathway plays a central role in
              erythropoiesis<sup>1,2</sup>
            </h3>
            <h3>HIF-PH inhibition:</h3>
            <p>
              <ul>
                <li>
                  <span>•</span> Increases erythropoietin (EPO) production
                </li>
                <li>
                  <span>•</span> Suppresses hepcidin production
                </li>
                <li>
                  <span>•</span> Increases iron absorption, transport and
                  mobilisation
                </li>
              </ul>
            </p>
            <p>
              In normoxic conditions, the HIF pathway is not activated and the
              HIF-1α subunit is rapidly degraded via HIF prolyl-hydroxylase
              (HIF-PH):<sup>3</sup>
            </p>
          </Animation>
          <Animation>
            <h3>Normal oxygen</h3>
            <div>
              <img
                src={`${imgPath}/left-content.png`}
                className="leftContentImg"
              />
            </div>
          </Animation>
          <Animation className="smaller">
            <p>
              <ul>
                <li>1. Locatelli F et al. Am J Nephrol. 2017;45:187-199.</li>
                <li>
                  2. Koury MJ, Haase VH. Nat Rev Nephrol. 2015;11:394–410.
                </li>
                <li>3. Haase VH. Hemodial Int. 2017;21:S110–S124.</li>
                <li>
                  4. Biggar P, Gheun-Ho K. Kidney Res Clin Pract.
                  2017;36:209–223.
                </li>
                <li>
                  5. Del Vecchio L, Locatelli F. Expert Opin Investig Drugs.
                  2018;27:613–621.
                </li>
                <li>6. EVRENZO EMA SmPC 2021.</li>
                <li>7. Guedes M et al. Kidney360. 2020;(1):855-62.</li>
              </ul>
            </p>
          </Animation>
        </Left>
        <Right>
          <FlexRow>
            <Animation>
              <h3>Hypoxia</h3>
              <p>
                In hypoxic conditions, the HIF pathway is activated: the HIF-1α
                subunit is not degraded, allowing dimerisation with the HIF-1ß
                subunit and so inducing the transcription and translation of
                target hypoxia response genes involved in erythropoiesis,
                including:<sup>3-6</sup>
              </p>
            </Animation>
          </FlexRow>
          <FlexRow>
            <Animation>
              <Left>
                <div className="rectangle text1">Erythropoietin</div>
                <img src={`${imgPath}/plus.png`} />
                <div className="rectangle text2">
                  Genes involved in iron metabolism
                </div>
                <img src={`${imgPath}/plus.png`} />
                <div className="rectangle text3">
                  Genes involved in downregulating hepcidin levels
                </div>
              </Left>
            </Animation>
          </FlexRow>
          <FlexRow>
            <p>
              In CKD, oxygen sensing via HIF is impaired, and this contributes
              to the development of anaemia.<sup>7</sup>
            </p>
            <p>
              CKD, chronic kidney disease; HIF, hypoxia-inducible factor;
              HIF-PH, hypoxia-inducible factor prolyl-hydroxylase; EPO,
              erythropoietin.
            </p>
          </FlexRow>
        </Right>
      </Main>
      <Nav back={-1} forward="/hlf-pathway-in-action" />
    </Section>
  );
}
