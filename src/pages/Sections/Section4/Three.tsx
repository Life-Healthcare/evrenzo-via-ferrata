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
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-0 text-center">
            <header className="flex justify-between mt-14 -mb-20">
                <h1 className="text-5xl text-primary">
                    See EVRENZO at work
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-20">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className=" text-[32px] text-start w-full">
                <img className="w-full" src="./images/section4-3-img.png" alt="" />
            </section>
        </motion.article>
    )
}