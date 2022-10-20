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
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 text-center">
            <header className="flex justify-between mt-14 -mb-20">
                <h1 className="text-5xl text-primary">
                    See EVRENZO at work
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-20">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="flex flex-grow justify-center items-center text-[32px] w-full text-center">
                <div className="w-[1585px] flex flex-col items-center">
                    <h1 className="text-5xl">CONGRATULATIONS</h1>
                    <p className="text-4xl">You have successfully now completed the EVRENZO Via Ferrata</p>
                    <p className="text-3xl w-[867px] mt-20">Thank you for your visit - we hope you enjoyed taking part. 
    Please visit some of the other zones at the EVRENZO booth. 
    If you would like to receive regular updates, speak to a representative who will take your details.</p>
                </div>
            </section>
            <footer className="flex flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
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