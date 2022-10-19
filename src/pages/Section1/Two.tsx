
import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-12 text-center">
            <header className="flex items-end justify-between mt-14 mb-20">
                <h1 className="text-5xl text-primary">
                    Welcome to the EVRENZO<span className="text-4xl">TM</span> Via Ferrata
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES</p>
                </div>
            </header>
            <section className="grid grid-cols-2 text-4xl text-start gap-10">
                <div className="">
                    High altitude is a challenging environment for most humans.<span className="text-lg">1</span> As elevation above sea level increases, the concentration of oxygen molecules decreases, causing hypoxia.
                    <span className="text-lg">1</span>
                    <br/><br/>
                    How oxygen varies with weight<span className="text-lg">2</span>
                    <br/><br/>
                    <p className="text-center flex items-center justify-center mb-4">
                        <span className="w-[500px]">Change in average atmospheric pressure with altitude2</span>
                    </p>
                    <img src="./images/section1-2-graph.png" alt="graph" />
                </div>
                <div>
                Oxygen partial pressure reduces exponentially as
                height increases.3
                <br/><br/>
                Oxygen partial pressure is only half its sea-level value at 5,000 m, the altitude of the Everest Base Camp, and only a third at the summit of Mount Everest.3 
                <br/><br/>
                Without acclimatisation, people who travel to these heights may suffer from altitude sickness.4
                <br/><br/>
                Yet around the world, more than 81 million people live at high altitude (elevations above 2,500 m), and have adapted to the lower oxygen levels.5
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <img className="absolute -bottom-12 -right-24"
                src="./images/section1-2-img.png" alt="farmer" />
            </footer>
        </motion.article>
    )
}