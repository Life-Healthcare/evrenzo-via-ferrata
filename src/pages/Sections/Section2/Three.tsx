
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import { useContext, useState, createContext } from "react"
import SmallText from "../../../components/SmallText"
import SlideContext from "../../../contexts/SlideContext"
import Box from "./Box"

export const currentBoxContext = createContext<[string | null, React.Dispatch<React.SetStateAction<string | null>>]>([null, () => {}])

export default () => {
    const [slideDirection] = useContext(SlideContext);
    const [currentBox, setCurrentBox] = useState<string | null>(null);

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
                    <h2 className="text-4xl">How the threads came together<SmallText>1</SmallText></h2>
                    <div className="grid grid-cols-3 gap-10 w-[912px] aspect-square">
                        <AnimateSharedLayout>
                            <currentBoxContext.Provider value={[currentBox, setCurrentBox]}>
                                <Box className="before:bg-green-700" title="EPO Gene" line="bottom">
                                    Professor Gregg Semenza found that specific DNA segments located next to the EPO gene mediated the response to hypoxia.1
                                </Box>
                                <Box className=" before:bg-[#ad1aac]" title="O2 sensing mechanism">
                                    Professor Semenza’s group discovered how the EPO gene is regulated by varying O2 levels, and Sir Peter Ratcliffe’s group found that this mechanism is functional in many different cell types (not only in the kidney).1
                                </Box>
                                <div className="flex flex-col items-center justify-center gap-10">
                                    <img src="./images/prompt-tap.svg" alt="tap" />
                                    <p>Tap to select</p>
                                </div>
                                <Box className="before:bg-green-500" title="HIF">
                                    Professor Semenza discovered a protein complex that binds to the DNA segment in an oxygen-dependent manner. This complex, which he called the hypoxia-inducible factor (HIF), consisted of two transcription factors: HIF-1α and HIF-1ß.1
                                </Box>
                                <Box className="before:bg-purple-900" title="VHL and HIF-1a">
                                    Professor Ratcliffe’s group demonstrated that VHL interacts with HIF-1α and is required for its degradation, so linking VHL to HIF-1α.1
                                </Box>
                                <Box className="before:bg-[#4ec3e0]" title="VHL">
                                    Cancer researcher Professor William Kaelin showed that a gene associated with von Hippel-Lindau’s (VHL) disease was also involved in controlling responses to hypoxia.1
                                </Box>
                                <div></div>
                                <Box className="before:bg-green-900" title="HIF-PHIs identified">
                                    Professor Radcliffe identified  prolyl hydroxylase and also showed that the gene activating function of HIF-1α was regulated by oxygen-dependent hydroxylation.1
                                </Box>
                                <Box className="before:bg-[#005893]" title="HIF-PH">
                                    Professors Ratcliffe and Kaelin independently showed that in normoxia, hydroxyl groups are added to HIF-1α (prolyl hydroxylation). This allows VHL to recognise and bind to HIF-1α, and explains how normal oxygen levels control HIF-1α degradation with the help of oxygen-sensitive enzymes (prolyl hydroxylases or HIF-PH).1
                                </Box>
                            </currentBoxContext.Provider>
                        </AnimateSharedLayout>
                        <AnimatePresence>
                            {currentBox && <motion.div 
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                            className="w-screen h-screen absolute top-0 left-0 pointer-events-none bg-black/50"></motion.div>}
                        </AnimatePresence>
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