import React from "react";
import {
  Section,
  Header,
  Main,
} from "@/pages/evrenzo-at-work/evrenzo-at-work.style";
import Nav from "@/components/nav/nav";

type Props = {
  handleUserTouch: () => void;
};

export default function LivingAtHigh({ handleUserTouch }: Props) {
  const [playing, setPlaying] = React.useState(false);
  const [played, setPlayed] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const imgPath = "./assets/evrenzo-at-work";

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

  return (
    <Section>
      <Header>
        <p>See EVRENZO at work</p>
      </Header>
      <Main>
        <div>
          <video
            ref={videoRef}
            poster={`${imgPath}/poster.png`}
            src={`${imgPath}/video.mp4`}
            playsInline
            controls={playing}
            style={!played ? { maxHeight: "48vw" } : {}}
            onPlay={() => {
              setPlaying(true);
              setPlayed(true);
            }}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onClick={play}
          ></video>
        </div>
      </Main>
      <Nav back={-1} forward="/congratulations" />
    </Section>
  );
}
