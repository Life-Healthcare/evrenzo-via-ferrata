
import { motion } from "framer-motion"
import { useContext } from "react"
import Label from "../../../components/Label";
import SmallText from "../../../components/SmallText";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-3 text-center">
            <header className="flex justify-between mt-14 -mb-20">
                <h1 className="text-5xl text-primary">
                    What this means for anaemia of CKD
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-14">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="grid grid-cols-2 text-[32px] text-start gap-20">
                <div className="flex flex-col gap-5">
                    <p>The discovery of HIF provided a central cellular pathway with far-ranging implications for human physiology, disease states, and medicine.1</p>
                    <p>Patients with chronic kidney disease (CKD) often suffer from anaemia due to:2–6 
- Reduced oxygen sensing 
- Reduced EPO production 
- Chronic inflammation resulting in increased hepcidin levels 
- Iron deficiency </p>
                    <p>EPO is produced by cells in the kidney and is essential for controlling the formation of red blood cells, through the
HIF pathway.1 </p>
                    <p>The HIF pathway is therefore a target for new treatments to manage anaemia of CKD.</p>
                    <p>To find out how patients with symptomatic anaemia of CKD are benefiting from a new class of treatment, take the next step on the EVRENZO Via Ferrata. </p>
                </div>
                <div className="flex flex-col gap-5 text-center relative">
                    <div className="w-full flex justify-end translate-y-14">
                        <p className="w-[400px] text-3xl">Oxygen sensing is central to a large number of diseases1</p>
                    </div>
                    <div className="flex flex-col absolute -translate-y-2/4 top-2/4 right-0 gap-5 z-10">
                        {['Anaemia', 'Cancer', 'Stroke', 'Infection', 'Wound Healing', 'Myocardial Infarction'].map((text, i) => {
                            const labelColour = i === 0 ? 'bg-primary' : 'bg-[#4a4a4a]'
                            return (
                               <Label 
                               style={{
                                marginLeft: `${i * 50}px`
                               }}
                               className={labelColour}>{text}</Label>
                            )
                        })}
                    </div>
                    <img className="mix-blend-multiply relative z-0" src="./images/section2-4-img.png" alt="body"/>
                    <p className="text-2xl">CKD, chronic kidney disease; EPO, erythropoietin; HIF, hypoxia-inducible factor.</p>
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <div>
                <p>1. The Nobel Prize. Available at: https://www.nobelprize.org/prizes/medicine/2019/summary/. </p>
                <p>Date accessed: October 2022.</p>
                <p>2. Wenger RH, Hoogewijs D. Am J Physiol Renal Physiol. 2010;298(6):F1287–F1296. </p>
                <p>3. Fishbane S, Spinowitz B. Am J Kidney Dis. 2018;71(3):423–435.</p>
                <p>4. Babitt JL, Lin HY. J Am Soc Nephrol. 2012;23(10):1631–1634.</p>
                <p>5. Peyssonnaux C et al. Cell Cycle. 2008;7(1):28–32.</p>
                <p>6. Kaplan JM et al. Int J Mol Sci. 2018;19(2):389.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>EVRENZO™ is only available by prescription.</p>
                    <div className="grid grid-cols-2 gap-10 text-2xl w-[1257px]">
                        <div className="flex">
                            <p>Astellas Pharma B.V., Sylviusweg 62, 2333 BE Leiden. For full prescribing information see, please scan the QR code or click here
For adverse events reporting, please contact Pharmacovigilance.EST-C@astellas.com</p>
                            <img className="w-28 aspect-square" src="./images/section1-3-qr1.svg" alt="qr1" />
                        </div>
                        <div className="flex">
                            <p>For more information, please consult the complete product information for EVRENZO (EMA). To access it, please scan the QR code or click here</p>
                            <img className="w-28 aspect-square" src="./images/section1-3-qr2.svg" alt="qr2" />
                        </div>
                    </div>
                    <p>Prescribing information may vary. Please refer to your local prescribing information.</p>
                </div>
            </footer>
        </motion.article>
    )
}