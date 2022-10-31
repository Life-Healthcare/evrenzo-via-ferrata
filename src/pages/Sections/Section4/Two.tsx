import { AnimatePresence, motion } from "framer-motion"
import { useContext, useState, createContext } from "react"
import SmallText from "../../../components/SmallText";
import Triangle from "../../../components/Triangle";
import SlideContext from "../../../contexts/SlideContext"
import Box from "./Box";

export const currentBoxContext = createContext<[string | null, React.Dispatch<React.SetStateAction<string | null>>]>([null, () => {}])

export default () => {
    const [slideDirection] = useContext(SlideContext);
    const [currentBox, setCurrentBox] = useState<string | null>(null);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-40 text-center">
            <header className="flex justify-between mt-14">
                <h1 className="text-5xl text-primary w-[1000px] text-left">
                    EVRENZO: the first treatment to harness the HIF pathway<SmallText>1</SmallText>
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-14">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE <br/> UNITED STATES</p>
                </div>
            </header>
            <section className="flex flex-col text-[32px] text-start gap-20">
                <div className="flex flex-col gap-5">
                    <p>EVRENZO is the first HIF-PH inhibitor in the world to gain Marketing Authorisation.<SmallText>1</SmallText> It has been licensed in China and Japan since December 2018 and September 2019, respectively,<SmallText>2,3</SmallText> and has now gained marketing authorisation in the EU and the UK.<SmallText>4,5</SmallText></p>
                </div>
                <div className="grid grid-cols-2 w-11/12 gap-12">
                    <currentBoxContext.Provider value={[currentBox, setCurrentBox]}>
                        <Box 
                        className="bg-green-700"
                        title="EVRENZO mimics the body’s natural response to hypoxia by activating the HIF pathway and increasing plasma EPO|4,6">
                            <p className="text-5xl mb-20">EVRENZO – mimicking hypoxia</p>
                            <img src="./images/section4-2-img.png" className="mb-10" alt="" />
                            <div className="grid grid-cols-2 gap-16 text-3xl">
                                <p>
                                    EVRENZO inhibits HIF-PH, thus preventing breakdown of HIF-1α and activating the HIF pathway<SmallText>4,6</SmallText>
                                </p>
                                <p>
                                    This induces transcription and translation of genes involved in erythropoiesis<SmallText>4,6</SmallText>
                                </p>
                                <p className="col-span-2">
                                HIF-PH inhibitors induce activation of the genes responsible for erythropoiesis 
(as is observed at low oxygen pressure) but do so at normal oxygen concentrations.<SmallText>7</SmallText>
                                </p>
                                <p className="text-2xl col-span-2">
                                    HIF, hypoxia-inducible factor; HIF-PH, hypoxia-inducible factor prolyl hydroxylase.</p>
                            </div>
                        </Box>
                        <Box 
                        className="bg-purple-900"
                        title="EVRENZO has demonstrated Hb improvements comparable to ESA in patients not on dialysis, just started on dialysis and stable on dialysis|4">
                            <p className="text-5xl mb-20">EVRENZO – mimicking hypoxia</p>
                            <img src="./images/section4-2-img.png" className="mb-10" alt="" />
                            <div className="grid grid-cols-2 gap-16 text-3xl">
                                <p>
                                    EVRENZO inhibits HIF-PH, thus preventing breakdown of HIF-1α and activating the HIF pathway<SmallText>4,6</SmallText>
                                </p>
                                <p>
                                    This induces transcription and translation of genes involved in erythropoiesis<SmallText>4,6</SmallText>
                                </p>
                                <p className="col-span-2">
                                HIF-PH inhibitors induce activation of the genes responsible for erythropoiesis
(as is observed at low oxygen pressure) but do so at normal oxygen concentrations.<SmallText>7</SmallText>
                                </p>
                                <p className="text-2xl col-span-2">
                                    HIF, hypoxia-inducible factor; HIF-PH, hypoxia-inducible factor prolyl hydroxylase.</p>
                            </div>
                        </Box>
                        <Box
                        className="bg-[#43b02a]"
                        title="EVRENZO reduces hepcidin levels and improves iron bioavailability|4">
                                                        <div className="text-3xl">
                                <p className="mb-20">
                                Through the inhibition of HIF-PH, EVRENZO stimulates a coordinated erythropoietic response that not only increases erythropoietin (EPO) levels, but also increases iron mobilisation, as well as helping to overcome the effects of inflammation by suppressing hepcidin.<SmallText>4</SmallText>
                                </p>
                                <div className="grid grid-cols-2 gap-20 items-center ml-24">
                                    <img src="./images/section4-2-img2.png" className="mb-10" alt="" />
                                    <p className="text-2xl w-[390px]">
                                        Functional iron deficiency is mediated by the liver hormone hepcidin. Hepcidin decreases the membrane expression of ferroportin, an iron exporter, leading to reduced circulating iron levels.<SmallText>8</SmallText>
                                    </p>
                                </div>
                                <p className="mt-10">
                                EVRENZO is indicated for the treatment of adult patients with symptomatic anaemia associated with chronic kidney disease (CKD)<SmallText>4</SmallText>
                                </p>
                                <div className="mt-40 text-2xl">
                                    <p>
                                        Adapted from Haase, 2017.<SmallText>8</SmallText>
                                    </p>
                                    <p>
                                        CKD, chronic kidney disease; EPO, erythropoietin; HIF-PH, hypoxia-inducible factor prolyl hydroxylase.
                                    </p>
                                </div>
                            </div>
                        </Box>
                        <Box 
                        className="bg-[#ad1aac]"
                        title="Proud to be first|"
                        image={true}>
                            <div className="flex justify-between">
                                <p className="text-5xl mb-20">Proud to be first</p>
                                <img className="w-[300px] -translate-y-7" src="./images/Logo2.svg" alt="logo" />
                            </div>
                            <ul className="flex flex-col gap-10">
                                <ListItem>First-in-class HIF-PHI<SmallText>1</SmallText></ListItem>
                                <ListItem>First oral treatment in the past 30 years for symptomatic anaemia of CKD</ListItem>
                                <ListItem>First HIF-PHI with the convenience of oral administration<SmallText>2,3</SmallText></ListItem>
                                <ListItem up={true}>First HIF-PHI to demonstrate comparable efficacy to ESA in raising and maintaining Hb levels,<SmallText>3</SmallText> irrespective of inflammatory status and without the need for dose escalation<SmallText>4</SmallText></ListItem>
                                <ListItem>First HIF-PHI to demonstrate reduced use of IV iron vs. ESA<SmallText>3</SmallText></ListItem>
                            </ul>
                            <div className="text-2xl">
                                <p className="mt-20 mb-3">
                                CKD, chronic kidney disease; ESA, erythropoiesis-stimulating agent; Hb, haemoglobin; <br/> HIF-PHI, hypoxia-inducible factor prolyl hydroxylase inhibitor; IV, intravenous.
                                </p>
                                <ul>
                                    <li>1. Sanghani NS, Haase VH. Adv Chronic Kidney Dis. 2019;26(4):253–266.</li>
                                    <li>2. Akizawa T et al. J Am Soc Nephrol. 2020;31(7):1628–1639.</li>
                                    <li>3. EVRENZO EU SmPC, September 2022.</li>
                                    <li>4. Provenzano R et al. Nephrol Dial Transplant. 2021;36(9):1717–1730.</li>
                                </ul>
                            </div>
                        </Box>
                    </currentBoxContext.Provider>
                    <AnimatePresence>
                        {currentBox && <motion.div onClick={() => setCurrentBox(null)}
                        initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className="w-screen h-screen absolute top-0 left-0 bg-black/50 z-10"></motion.div>}
                    </AnimatePresence>
                </div>
            </section>
            <footer className="flex flex-grow flex-col font-reg pointer-events-none justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <p>
                EPO, erythropoietin; ESA, erythropoiesis-stimulating agent; HIF, hypoxia-inducible factor.
                </p>
                <ul>
                    <li>1. Sanghani NS, Haase VH. Adv Chronic Kidney Dis. 2019;26(4):253–266.</li>
                    <li>2. FibroGen. Available at: https://investor.fibrogen.com/news-releases/news-release-details/fibrogen-announces-approval-roxadustat-china-treatment-anemia. Date accessed: October 2022.</li> 
                    <li>3. Astellas. Available at: https://www.astellas.com/en/news/15096. Date accessed: October 2022.</li>
                    <li>4. EVRENZO EU SmPC, September 2022.</li>
                    <li>5. MHRA. Available at: https://products.mhra.gov.uk/product/?product=EVRENZO. Date accessed: October 2022.</li>
                    <li>6. Del Vecchio L, LocateIIi F. Expert Opin Investig Drugs. 2018;27(1):125–133.</li>
                    <li>7. Locatelli F et al. Am J Nephrol. 2017;45(3):187–199.</li>
                    <li>8. Haase VH. Hemodial Int. 2017;21:S110–S124.</li>
                    <li>9. Akizawa T et al. J Am Soc Nephrol. 2020;31(7):1628–1639.</li>
                </ul>
            </footer>
        </motion.article>
    )
}

interface ListItemProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    up?: boolean
}

const ListItem = ({children, up}: ListItemProps) => {
    return (
        <li className="flex items-center gap-10">
            <img className={`-translate-y-1 ${up && '-translate-y-12'}`} src="./images/checkmark.svg" alt="checkmark"/>
            <span>{children}</span>
        </li>
    )
}
