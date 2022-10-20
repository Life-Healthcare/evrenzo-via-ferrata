
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
            <header className="flex items-end justify-between mb-5">
                <h1 className="text-5xl text-primary">
                    A fundamental role in sustaining life
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="grid grid-cols-2 text-[32px] text-start gap-10">
                <div className="flex items-center justify-center col-span-2 gap-10">
                    <div className="flex flex-col">
                        <span>When oxygen levels are low<SmallText>1</SmallText></span>
                        <img src="./images/section2-2-img.png" alt="image" />
                    </div>
                    <p className="text-2xl w-80">
                    HIF, hypoxia-inducible factor; HRE, specific DNA sequences; OH, hydroxyl group; VHL, von Hippel-Lindau.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <p>The Nobel Prize in Physiology or Medicine 2019 was awarded jointly to three Professors working in three different disciplines - Sir Peter J. Ratcliffe (a nephrologist), Professor Gregg L. Semenza (a paediatric geneticist) and Professor William G. Kaelin Jr (an oncologist).<SmallText>2</SmallText></p>
                    <p>The award was for their discovery of how cells sense and adapt to oxygen availability.<SmallText>2</SmallText></p>
                </div>
                <div className="flex flex-col gap-5">
                    <p>Oxygen plays a fundamental role in sustaining life, but the molecular mechanisms underlying how cells adapt to variations in oxygen remained elusive until this discovery.<SmallText>2</SmallText></p>
                    <p>Working separately and then combining their knowledge, the trio revealed the process through which changes in gene expression in response to oxygen levels alter cell metabolism, tissue remodelling and physiology.<SmallText>2</SmallText></p>
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <div className="flex flex-col">
                    <p>1. Mandl M, Depping R. Mol Med. 2014;20(1):215–220.</p>
                    <p>2. The Nobel Prize. Available at: https://www.nobelprize.org/prizes/medicine/2019/summary/. Date accessed: October 2022.</p>
                </div>
            </footer>
        </motion.article>
    )
}