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
import sessionManager from "@/services/session-manager";
import emitter from "@/services/emitter"

type Props = {
  handleUserTouch: () => void;
};

export default function LivingAtHigh({ handleUserTouch }: Props) {
  const [playing, setPlaying] = React.useState(false);
  const [played, setPlayed] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [pdfIsShown, setPdfIsShown] = React.useState(false);
  const imgPath = "./assets/hlf-pathway-in-action";

  const showCartHandler = () => {
    setPdfIsShown(true);
  };

  const hideCartHandler = () => {
    setPdfIsShown(false);
  };

  React.useEffect(() => {
    if (!playing) return;
    let timer1 = setInterval(() => {
      handleUserTouch();
    }, 1000);

    return () => {
      clearInterval(timer1);
    };
  }, [playing]);

  const play = React.useCallback(() => {
    if (videoRef.current === null) return;
    videoRef.current.play().catch((err) => {
      console.error(err);
    });
  }, []);

  React.useEffect(() => {
    sessionManager.start();
    sessionManager.page("page-1");
  }, []);

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
          <p>See the HIF pathway in action</p>
        </Header>
        <Main>
          <video
            ref={videoRef}
            poster={`${imgPath}/poster.png`}
            src={`${imgPath}/video.mp4`}
            playsInline
            controls={playing}
            onPlay={() => {
              setPlaying(true);
              setPlayed(true);
            }}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onClick={play}
			onTimeUpdate={() => emitter.emit("interaction")}
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
