import React from "react";
import { motion } from "framer-motion"
import { useContext } from "react"
import DisclaimerTop from "../../../components/DisclaimerTop";
import SmallText from "../../../components/SmallText";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-12 text-center">
            <img src="" alt="" />
        </motion.article>
    )
}