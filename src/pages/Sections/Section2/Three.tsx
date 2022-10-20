
import { motion } from "framer-motion"
import { useContext } from "react"
import SmallText from "../../../components/SmallText";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-12 text-center">
            <header className="flex justify-between mt-14 -mb-20">
                <h1 className="text-5xl text-primary">
                    Uncovering the mechanism
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-14">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="grid grid-cols-5 text-[32px] text-start gap-20">
                <div className="flex flex-col gap-5 col-span-2">
                    <p>When low oxygen (hypoxia) is detected, the carotid body communicates rapidly with the brain to raise the respiratory rate.1</p>
                    <p>In the longer term, the body adapts physiologically to hypoxia by raising levels of erythropoietin (EPO), which increases red blood cell production (erythropoiesis). But how this process itself is controlled has been a mystery.1</p>
                    <p>These separate lines of investigation converged in the discovery of the HIF mechanism. The Nobel Laureates had elucidated the oxygen-sensing mechanism and how it worked.</p>
                </div>
                <div className="flex flex-col gap-5 col-span-3">
                    <div className="grid grid-cols-3">
                    <div className="bg-black border-bottom-right-cut w-72 aspect-square"></div>
                    <div className="bg-black border-bottom-right-cut w-72 aspect-square"></div>
                    <div className="bg-black border-bottom-right-cut w-72 aspect-square"></div>
                    </div>
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <p className="w-[787px]">
                    EPO, erythropoietin; HIF, hypoxia-inducible factor; HIF-PH, hypoxia-inducible factor prolyl hydroxylase; HIF-PHI, hypoxia-inducible factor prolyl hydroxylase inhibitor; VHL, von Hippel-Lindau.
                </p>
                <p>
                    1. The Nobel Prize. Available at: https://www.nobelprize.org/prizes/medicine/2019/summary/. Date accessed: October 2022.
                </p>
            </footer>
        </motion.article>
    )
}