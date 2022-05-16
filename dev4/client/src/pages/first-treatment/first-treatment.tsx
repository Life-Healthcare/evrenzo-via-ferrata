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
} from "@/pages/first-treatment/first-treatment.style";
import Nav from "@/components/nav/nav";
import { Modal } from "@/components/modal/modal";
import sessionManager from "@/services/session-manager";

type cardType = {
  image: string;
  color: string;
};

export default function LivingAtHigh() {
  const [cardIsShown, setCardIsShown] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [color, setColor] = React.useState("");
  const imagePath = "./assets/first-treatment";

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  const card = ({ image, color }: cardType) => {
    setImage(image);
    setColor(color);
    showCartHandler();
  };

  React.useEffect(() => {
    sessionManager.start();
    sessionManager.page("home");
  }, []);

  return (
    <>
      {cardIsShown && (
        <Modal onClose={() => setCardIsShown(false)}>
          <Card color={color}>
            <div>
              <img src={image} />
            </div>
            <button onClick={() => hideCartHandler()}>X</button>
          </Card>
        </Modal>
      )}
      <Section>
        <Header>
          <p>
            EVRENZO: the first treatment to harness the HIF pathway<sup>1</sup>
          </p>
        </Header>
        <Main>
          <FlexRow>
            <Animation>
              <p>
                EVRENZO is the first HIF-PH inhibitor in the world to gain
                Marketing Authorisation. It has been licensed in China and Japan
                since 2019,<sup>2</sup> and has now gained marketing
                authorisation in Europe and the UK.<sup>3,4</sup>
              </p>
            </Animation>
          </FlexRow>
          <FlexRow>
            <Left>
              <div className="item">
                <button
                  onClick={() =>
                    card({ image: `${imagePath}/card1.png`, color: "#007A33" })
                  }
                >
                  <p>
                    EVRENZO mimics the body’s natural response to hypoxia by
                    activating the HIF pathway and increasing plasma EPO
                    <sup>5,6</sup>
                  </p>
                </button>
              </div>
              <div className="item">
                <button
                  onClick={() =>
                    card({ image: `${imagePath}/card2.png`, color: "#007A33" })
                  }
                >
                  <p>
                    EVRENZO reduces hepcidin levels and improves iron
                    bioavailability<sup>6</sup>
                  </p>
                </button>
              </div>
            </Left>
            <Right>
              <div className="item">
                <button
                  onClick={() =>
                    card({ image: `${imagePath}/card3.png`, color: "#000000" })
                  }
                >
                  <p>
                    EVRENZO has demonstrated Hb improvements comparable to ESA
                    in patients not on dialysis, just started on dialysis and
                    stable on dialysis<sup>6</sup>
                  </p>
                </button>
              </div>
              <div className="item">
                <button
                  onClick={() =>
                    card({ image: `${imagePath}/card3.png`, color: "#000000" })
                  }
                >
                  <p>Proud to be first</p>
                </button>
              </div>
            </Right>
          </FlexRow>
        </Main>
        <Footer>
          <FlexRow>
            <Animation>
              <ul>
                <li>
                  1. Sanghani NS, Haase VH. Adv Chronic Kidney Dis.
                  2019;26(4):253-266.
                </li>
                <li>
                  2. Japanese Pharmaceuticals and Medical Devices Agency.
                  https://www.pmda.go.jp/files/000234811.pdf (accessed April
                  2022).
                </li>
                <li>
                  3. https://www.ema.europa.eu/en/medicines/human/EPAR/evrenzo
                  (accessed April 2022).
                </li>
                <li>
                  4. https://products.mhra.gov.uk/product/?product=EVRENZO
                  (accessed April 2022).
                </li>
                <li>
                  5. Del Vecchio L, LocateIIi F. Expert Opin Investig Drugs.
                  2018;27(1):125-133.
                </li>
                <li>6. EVRENZO EMA SmPC 2021.</li>
                <li>7. Locatelli F et al. Am J Nephrol. 2017;45:187-199.</li>
                <li>8. Haase VH. Hemodial Int. 2017;21:S110–S124.</li>
                <li>
                  9. Akizawa T et al. J Am Soc Nephrol. 2020;31:1628-1639.
                </li>
              </ul>
            </Animation>
          </FlexRow>
        </Footer>
        <Nav back={-1} forward="/evrenzo-at-work" />
      </Section>
    </>
  );
}
