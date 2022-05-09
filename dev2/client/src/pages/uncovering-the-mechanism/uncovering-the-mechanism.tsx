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
  Grid,
  Card,
} from "@/pages/uncovering-the-mechanism/uncovering-the-mechanism.style";
import Nav from "@/components/nav/nav";
import { Modal } from "@/components/modal/modal";

type cardType = {
  title: string;
  content: string;
  backgroundColor: string;
};

export default function LivingAtHigh() {
  const [cardIsShown, setCardIsShown] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [backgroundColor, setBackgroundColoe] = React.useState("");
  const [content, setContent] = React.useState("");

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  const card = ({ title, content, backgroundColor }: cardType) => {
    setTitle(title);
    setContent(content);
    setBackgroundColoe(backgroundColor);
    showCartHandler();
  };

  return (
    <>
      {cardIsShown && (
        <Modal onClose={() => setCardIsShown(false)}>
          <Card backgroundColor={backgroundColor}>
            <div>
              <p
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <button onClick={() => hideCartHandler()} />
          </Card>
        </Modal>
      )}
      <Section>
        <Header>
          <p>Uncovering the mechanism</p>
        </Header>
        <Main>
          <Left>
            <Animation>
              <p>
                When low oxygen (hypoxia) is detected, the carotid body
                communicates rapidly with the brain to raise the respiratory
                rate.
                <sup>1</sup>
              </p>
              <p>
                In the longer term, the body adapts physiologically to hypoxia
                by raising levels of erythropoietin (EPO), which increases red
                blood cell production (erythropoiesis). But how this process
                itself is controlled has been a mystery.<sup>1</sup>
              </p>
              <p>
                These separate lines of investigation converged in the discovery
                of the HIF mechanism. The Nobel Laureates had elucidated the
                oxygen-sensing mechanism and how it worked.
              </p>
            </Animation>
          </Left>
          <Right>
            <Animation>
              <h3>
                How the threads came together<sup>1</sup>
              </h3>
            </Animation>
            <Animation>
              <Grid>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "EPO gene",
                        content:
                          "Professor Gregg Semenza found that\nspecific DNA segments located next\nto the EPO gene mediated the\nresponse to hypoxia.<sup>1</sup>",
                        backgroundColor: "#007A33",
                      })
                    }
                  >
                    <p>EPO gene</p>
                  </button>
                </div>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "O<sub>2</sub> sensing mechanism",
                        content:
                          "Professor Semenza’s group\ndiscovered how the EPO gene is\nregulated by varying O<sub>2</sub> levels,\nand Sir Peter Ratcliffe’s group\nfound that this mechanism is\nfunctional in many different cell\ntypes (not only in the kidney).<sup>1</sup>",
                        backgroundColor: "#AD1AAC",
                      })
                    }
                  >
                    <p>
                      O<sub>2</sub> sensing mechanism
                    </p>
                  </button>
                </div>
                <div className="item">
                  <img
                    src="./assets/uncovering-the-mechanism/tap-to-select.png"
                    className="tap-img"
                  />
                </div>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "HIF",
                        content:
                          "Professor Semenza discovered a protein\ncomplex that binds to the DNA segment in\nan oxygen-dependent manner. This\ncomplex, which he called the hypoxia-\ninducible factor (HIF), consisted of two transcription factors: HIF-1α and HIF-1ß.<sup>1</sup>",
                        backgroundColor: "#43B02A",
                      })
                    }
                  >
                    <p>HIF</p>
                  </button>
                </div>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "VHL and HIF-1α",
                        content:
                          "Professor Ratcliffe’s group\ndemonstrated that VHL interacts with\nHIF-1α and is required for its\ndegradation, so linking VHL to HIF-1α.<sup>1</sup>",
                        backgroundColor: "#40146E",
                      })
                    }
                  >
                    <p>VHL and HIF-1α</p>
                  </button>
                </div>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "VHL",
                        content:
                          "Cancer researcher Professor William\nKaelin showed that a gene associated\nwith von Hippel-Lindau’s (VHL)\ndisease was also involved in\ncontrolling responses to hypoxia.<sup>1</sup>",
                        backgroundColor: "#4EC3E0",
                      })
                    }
                  >
                    <p>VHL</p>
                  </button>
                </div>
                <div className="item"></div>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "HIF-PHIs identified",
                        content:
                          "Professor Radcliffe identified\nprolyl hydroxylase and also\nshowed that the gene\nactivating function of HIF-1α\nwas regulated by oxygen-\ndependent hydroxylation.<sup>1</sup>",
                        backgroundColor: "#004C2F",
                      })
                    }
                  >
                    <p>HIF-PHIs identified</p>
                  </button>
                </div>
                <div className="item">
                  <button
                    onClick={() =>
                      card({
                        title: "HIF-PH",
                        content:
                          "Professors Ratcliffe and Kaelin\nindependently showed that in normoxia,\nhydroxyl groups are added to HIF-1α\n<i>(prolyl hydroxylation).</i> This allows VHL to\nrecognise and bind to HIF-1α, and\nexplains how normal oxygen levels control\nHIF-1α degradation with the help of\noxygen-sensitive enzymes <i>(prolyl hydroxylases or HIF-PH).</i><sup>1</sup>",
                        backgroundColor: "#005893",
                      })
                    }
                  >
                    <p>HIF-PH</p>
                  </button>
                </div>
                <svg
                  className="grid-lines"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3 3"
                >
                  <polyline
                    points="0.5,0.5 0.5,1.5 1.5,1.5 1.5,0.5 1.5,1.5 2.5,1.5 2.5,2.5 1.5,2.5 2.5,2.5 1.5,1.5"
                    stroke-width="0.01"
                    stroke="currentColor"
                    fill="none"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                </svg>
              </Grid>
            </Animation>
          </Right>
        </Main>
        <Footer>
          <FlexRow>
            <p>1. https://www.nobelprize.org/prizes/medicine/2019/summary/ (accessed April 2022)</p>
          </FlexRow>
        </Footer>
        <Nav back={-1} forward="/anaemia" />
      </Section>
    </>
  );
}
