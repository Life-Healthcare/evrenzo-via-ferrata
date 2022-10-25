
import { motion } from "framer-motion"
import { useContext } from "react"
import DisclaimerBottom from "../../../components/DisclaimerBottom";
import DisclaimerTop from "../../../components/DisclaimerTop";
import SmallText from "../../../components/SmallText";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-12 text-center">
            <header className="flex justify-end">
                <DisclaimerTop/>
            </header>
            <section className="flex flex-col flex-grow justify-center items-center gap-14">
                <h1 className="text-7xl w-[1000px] text-primary">
                    Welcome to the EVRENZO<SmallText className="text-4xl">TM</SmallText> Via Ferrata
                </h1>
                <p className="text-[42px] w-[1171px]">
                    A journey through the HIF pathway, its discovery, and the part it has played in the development of new treatment options for symptomatic anaemia of CKD (chronic kidney disease)
                </p>
                <img 
                className="w-[375px] h-[122px]"
                src="./images/Logo2.svg" alt="logo" />
            </section>
            <footer className="flex flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <p className="w-[599px] font-reg">
                    In the EU, EVRENZOTM (roxadustat) is indicated for treatment of adult patients with symptomatic anaemia associated with chronic kidney disease (CKD)
                </p>
                <DisclaimerBottom/>
            </footer>
        </motion.article>
    )
}