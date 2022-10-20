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
                    The role of the HIF pathway in anaemia of CKD
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-14">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="grid grid-cols-2 text-[32px] text-start gap-20">
                <div className="flex flex-col gap-5">
                    <p>The HIF (hypoxia-inducible factor) pathway plays a central role in erythropoiesis1,2</p>
                    <p>HIF-PH inhibition:</p>
                    <ul>
                        <li>•	Increases erythropoietin (EPO) production</li>
                        <li>•	Suppresses hepcidin production</li>
                        <li>•	Increases iron absorption, transport and mobilisation</li>
                    </ul>
                    <p>In normoxic conditions, the HIF pathway is not activated and the HIF-1α subunit is rapidly degraded via HIF prolyl-hydroxylase (HIF-PH):3</p>
                    <img src="./images/section3-2-img.png" alt="image" />
                </div>
                <div className="flex flex-col gap-5">
                    <p>Hypoxia</p>
                    <p>In hypoxic conditions, the HIF pathway is activated: the HIF-1α subunit is not degraded, allowing dimerisation with the HIF-1ß subunit and so inducing the transcription and translation of target hypoxia response genes involved in erythropoiesis, including:3–6</p>
                    <img src="./images/section3-2-img2.png" alt="image" />
                    <p>In CKD, oxygen sensing via HIF is impaired, and this contributes to the development of anaemia.7</p>
                    <p>CKD, chronic kidney disease; EPO, erythropoietin; 
HIF, hypoxia-inducible factor; HIF-PH, hypoxia-inducible factor prolyl hydroxylase.</p>
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <ul>
                    <li>1. Locatelli F et al. Am J Nephrol. 2017;45(3):187–199.</li>
                    <li>2. Koury MJ, Haase VH. Nat Rev Nephrol. 2015;11(7):394–410.</li>
                    <li>3. Haase VH. Hemodial Int. 2017;21:S110–S124.</li>
                    <li>4. Biggar P, Gheun-Ho K. Kidney Res Clin Pract. 2017;36(3):209–223.</li>
                    <li>5. Del Vecchio L, Locatelli F. Expert Opin Investig Drugs. 2018;27(7):613–621.</li>
                    <li>6. EVRENZO EU SmPC, July 2022.</li>
                    <li>7. Guedes M et al. Kidney360. 2020;1(8):855–862.</li>
                </ul>
            </footer>
        </motion.article>
    )
}