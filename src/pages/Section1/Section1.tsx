import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar/Navbar"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(/images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-12 text-center">
            <header className="flex justify-end">
                <div className="flex flex-col gap-5 justify-center mt-14 text-2xl w-96">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="flex flex-col flex-grow justify-center items-center gap-14">
                <h1 className="text-7xl w-[800px] text-primary">
                    Welcome to the EVRENZO<span className="text-4xl">TM</span> Via Ferrata
                </h1>
                <p className="text-[42px] w-[1171px]">
                    A journey through the HIF pathway, its discovery, and the part it has played in the development of new treatment options for symptomatic anaemia of CKD (chronic kidney disease)
                </p>
                <img 
                className="w-[375px] h-[122px]"
                src="/images/Logo2.svg" alt="logo" />
            </section>
            <footer className="flex flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <p className="w-[1153px]">
                    In the EU, EVRENZOTM (roxadustat) is indicated for treatment of adult patients with symptomatic anaemia associated with chronic kidney disease (CKD)
                </p>
                <p className="w-[1153px]">
                This information is intended for international Healthcare Professionals and was created by Astellas Pharma Inc.
                This medication is subject to additional monitoring.
                EVRENZO™ is only available by prescription.
                Prescribing information may vary. Please refer to your local prescribing information.
                </p>
                <Navbar next="2"/>
            </footer>
        </motion.article>
    )
}