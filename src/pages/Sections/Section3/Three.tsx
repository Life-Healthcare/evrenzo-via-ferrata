import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react"
import QRInfo from "../../../components/QRInfo";
import SmallText from "../../../components/SmallText";
import Triangle from "../../../components/Triangle";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoStarted, setVideoStarted] = useState(false);

    useEffect(() => {
        if(playing) {
            videoRef.current?.play()
            setVideoStarted(true);
        } else {
            videoRef.current?.pause()
        }
    }, [playing])

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-0 text-center">
            <header className="flex justify-between mt-14 -mb-20">
                <h1 className="text-5xl text-primary">
                    See the HIF pathway in action
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-20">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE <br/> UNITED STATES</p>
                </div>
            </header>
            <section className=" text-[32px] text-start w-full flex flex-grow">
                <video 
                className="w-full bg-no-repeat bg-cover max-h-[1050px] min-h-max-h-[1050px]"
                poster="./images/transparent.png"
                style={(playing || videoStarted) ? {background: 'black'} : {backgroundImage: "url(./images/section3-3-vid.png)"}}
                onClick={() => setPlaying(!playing)}
                    ref={el => videoRef.current = el} src="./videos/moa.mp4"/>
                    <AnimatePresence>
                        {!playing && <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        src="./images/play.svg" className="drop-shadow-lg pointer-events-none w-40 aspect-square absolute z-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"/>}
                    </AnimatePresence>
            </section>
            <footer className="flex flex-col justify-end mt-10 gap-10 text-2xl text-start font-semibold relative z-10">
                <QRInfo className="mb-3"/>
            </footer>
        </motion.article>
    )
}
