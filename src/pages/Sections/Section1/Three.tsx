
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
            <header className="flex items-end justify-between mt-14 mb-20">
                <h1 className="text-5xl text-primary">
                    Living at high altitude
                </h1>
                <DisclaimerTop/>
            </header>
            <section className="grid grid-cols-2 text-[32px] text-start gap-10">
                <div className="">
                    High altitude is a challenging environment for most humans.<SmallText>1</SmallText> As elevation above sea level increases, the concentration of oxygen molecules decreases, causing hypoxia.
                    <SmallText>1</SmallText>

                    <p className="font-bold2 my-10">How oxygen varies with weight<SmallText>2</SmallText></p>

                    <img src="./images/section1-2-graph.png" alt="graph" />
                </div>
                <div className="flex flex-col gap-5">
                    <p>
                        Oxygen partial pressure reduces exponentially asheight increases.<SmallText>3</SmallText>
                    </p>
                    <p>
                    Oxygen partial pressure is only half its sea-level value at 5,000 m, the altitude of the Everest Base Camp, and only a third at the summit of Mount Everest.<SmallText>3</SmallText>
                    </p>
                    <p>
                    Without acclimatisation, people who travel to these heights may suffer from altitude sickness.<SmallText>4</SmallText>
                    </p>
                    <p>
                    Yet around the world, more than 81 million people live at high altitude (elevations above 2,500 m), and have adapted to the lower oxygen levels.<SmallText>5</SmallText>
                    </p>
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <img className="absolute -bottom-12 -right-24"
                src="./images/section1-2-img.png" alt="farmer" />
            </footer>
        </motion.article>
    )
}