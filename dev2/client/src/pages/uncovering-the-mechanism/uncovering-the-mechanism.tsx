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
                          "Professor Gregg Semenza found that specific DNA segments located next to the EPO gene mediated the response to hypoxia.<sup>1</sup>",
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
                          "Professor Semenza’s group discovered how the EPO gene is regulated by varying O<sub>2</sub> levels, and Sir Peter Ratcliffe’s group found that this mechanism is functional in many different cell types (not only in the kidney).<sup>1</sup>",
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
                          "Professor Semenza discovered a protein complex that binds to the DNA segment in an oxygen-dependent manner. This complex, which he called the hypoxia-inducible factor (HIF), consisted of two transcription factors: HIF-1α and HIF-1ß.<sup>1</sup>",
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
                          "Professor Ratcliffe’s group demonstrated that VHL interacts with HIF-1α and is required for its degradation, so linking VHL to HIF-1α.<sup>1</sup>",
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
                          "Cancer researcher Professor William Kaelin showed that a gene associated with von Hippel-Lindau’s (VHL) disease was also involved in controlling responses to hypoxia.<sup>1</sup>",
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
                          "Professor Radcliffe identified  prolyl hydroxylase and also showed that the gene activating function of HIF-1α was regulated by oxygen-dependent hydroxylation.<sup>1</sup>",
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
                          "Professors Ratcliffe and Kaelin independently showed that in normoxia, hydroxyl groups are added to HIF-1α (prolyl hydroxylation). This allows VHL to recognise and bind to HIF-1α, and explains how normal oxygen levels control HIF-1α degradation with the help of oxygen-sensitive enzymes (prolyl hydroxylases or HIF-PH).<sup>1</sup>",
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
