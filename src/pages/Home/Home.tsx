import { useNavigate } from "react-router-dom"
import ButtonStart from "../../components/ButtonStart"
import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-ss.png)`}}
        className="bottom-mask absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-white p-24 pb-12 text-center">
            <header className="flex">
                <img 
                className="w-[396px] h-[134px]"
                src="./images/logo.svg" alt="logo" />
                <div className="flex flex-grow justify-center mt-14">
                    <div className="flex flex-col gap-7 w-[800px] translate-x-[calc(-396px/2)]">
                        <p className="text-3xl">This information is intended for international audiences.</p>
                        <p className="text-4xl">EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                        <p className="text-2xl">EVRENZO (roxadustat) has marketing authorisations in Japan, the European Union (EU) and the United Kingdom (UK),
                        Turkey, Russia, South Africa, Egypt, UAE and Kuwait.
                        </p>
                    </div>
                </div>
            </header>
            <section className="flex flex-col flex-grow justify-center items-center gap-24">
                <h1 className="text-7xl w-[800px]">Is the answer to anaemia of CKD in his blood?</h1>
                <ButtonStart onClick={() => navigate("/1")}/>
            </section>
            <footer className="flex flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <p className="w-[1153px]">
                    This information is intended for international Healthcare Professionals and was created by Astellas Pharma Inc.
                    This medication is subject to additional monitoring.
                    EVRENZO™ is only available by prescription.
                    Prescribing information may vary. Please refer to your local prescribing information.
                </p>
                <div className="flex justify-between">
                    <p>
                        MAT-NL-EVZ-2022-00020
                        Date of preparation: October 2022
                        Date of expiry: October 2022
                    </p>
                    <p className="w-[625px]">
                    © October 2022 Astellas Pharma Inc. or its affiliates.
                    All trademarks are the property of their respective owners.
                    </p>
                </div>
            </footer>
        </motion.article>
    )
}