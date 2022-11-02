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
        style={{ backgroundImage: `url(./images/section2-ss.png)`}}
        className="bottom-mask absolute w-full h-full">
            <img className="w-full h-full relative z-10" src="./pages/2.1.svg" alt="" />
        </motion.article>
    )
}