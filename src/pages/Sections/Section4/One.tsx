import { useNavigate } from "react-router-dom"
import ButtonStart from "../../../components/ButtonStart"
import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../../contexts/SlideContext"
import ScreensaverFooter from "../../../components/ScreensaverFooter"

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section3-ss.png)`}}
        className="bottom-mask absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-white p-24 pb-12 text-center">
            <header className="flex text-gray-700">
                <img 
                className="w-[396px] h-[134px]"
                src="./images/Logo2.svg" alt="logo" />
                <div className="flex flex-grow justify-center mt-14">
                    <div className="flex flex-col gap-7 w-[800px] translate-x-[calc(-396px/2)]">
                        <p className="text-3xl">This information is intended for international audiences.</p>
                        <p className="text-4xl">EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE <br/> UNITED STATES</p>
                        <p className="text-2xl">EVRENZO (roxadustat) has marketing authorisations in Japan, <br/>the European Union (EU) and the United Kingdom (UK),
                        Turkey, Russia, South Africa, Egypt, UAE and Kuwait.
                        </p>
                    </div>
                </div>
            </header>
            <section className="flex flex-col flex-grow justify-center items-center gap-24">
                <h1 className="text-7xl w-[1000px] text-gray-700">Welcome to the Summit</h1>
                <ButtonStart className="text-gray-700" onClick={() => navigate("/4/2")}/>
            </section>
            <ScreensaverFooter/>
        </motion.article>
    )
}