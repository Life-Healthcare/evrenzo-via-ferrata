import { motion } from "framer-motion"
import { useContext } from "react"
import QRInfo from "../../../components/QRInfo";
import SmallText from "../../../components/SmallText";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 text-center">
            <header className="flex justify-end mt-14 -mb-20">
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-20">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE <br/> UNITED STATES</p>
                </div>
            </header>
            <section className="flex flex-grow justify-center items-center text-[32px] w-full text-center">
                <div className="w-[1585px] flex flex-col items-center">
                    <h1 className="text-[52px]">CONGRATULATIONS</h1>
                    <h2 className="text-[42px] font-bold-ext">You have successfully now completed the EVRENZO Via Ferrata</h2>
                    <div className="text-[32px] w-[867px] mt-20">
                        <p>Thank you for your visit - we hope you enjoyed taking part. </p>
                        <p>Please visit some of the other zones at the EVRENZO booth. </p>
                        <p>If you would like to receive regular updates, speak to a representative who will take your details.</p>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <QRInfo/>
            </footer>
        </motion.article>
    )
}