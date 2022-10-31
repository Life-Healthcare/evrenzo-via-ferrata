
import { motion } from "framer-motion"
import { useContext } from "react"
import QRInfo from "../../../components/QRInfo";
import SmallText from "../../../components/SmallText";
import Triangle from "../../../components/Triangle";
import SlideContext from "../../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/section1-bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-gray-700 p-24 pb-12 text-center">
            <header className="flex justify-between mt-14 -mb-20">
                <h1 className="text-5xl text-primary">
                    Surmounting the impossible
                </h1>
                <div className="flex flex-col gap-5 justify-center text-2xl w-96 -translate-y-14">
                    <p>This information is intended for international audiences.</p>
                    <p>EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE <br/> UNITED STATES</p>
                </div>
            </header>
            <section className="grid grid-cols-2 text-[32px] text-start gap-20">
                <div className="flex flex-col gap-5">
                    <p>Sherpa people, who live in the mountainous regions of Nepal and Tibet, are physiologically well suited to high altitudes.<SmallText>1</SmallText></p>
                    <p>They were valued as mountain guides by early explorers to the Himalayas, and are now globally renowned as elite mountaineers. In 2019 the Nepali mountaineer Nimsdai (Nims) Purja achieved the seemingly impossible challenge of summiting all 14 of the world’s 8,000 m peaks inside seven months - a feat commemorated in the movie ‘14 Peaks’.<SmallText>6</SmallText></p>
                    <p className="font-bold2 w-11/12">What equips some individuals to perform so well at <br/> these heights? </p>
                    <p>In addition to their physical toughness and experience, it has been speculated that Sherpas benefit from a unique haemoglobin-binding capacity. Is the reason they can climb mountains without bottled oxygen that they carry extra oxygen in their blood?</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold2">The genetic link</p>
                    <p>Genome sequencing of Tibetans identified more than 30 genetic factors that adapt them for high altitude, including a mutation near a gene called <span className="italic">EPAS1</span>, which regulates production of haemoglobin and codes for a protein involved in sensing oxygen levels.<SmallText>7</SmallText></p>
                    <p>Comparison of Tibetans and Han Chinese has highlighted a number of genes that are targets of selection in hypoxic environments, including 3 key genes (<span className="italic">EPAS1</span>, <span className="italic">EGLN1</span> and <span className="italic">PPARA</span>) that are part of a mechanism called the
    HIF pathway.<SmallText>1</SmallText></p>
                    <p className="font-bold2 italic w-[648px]">To find out why the HIF pathway has excited interest among clinicians, take the next step on the EVRENZO Via Ferrata. </p>
                </div>
            </section>
            <footer className="flex flex-grow flex-col justify-end gap-10 h-[223px] text-2xl text-start font-semibold relative z-10">
                <div className="font-reg">
                    <p className="mb-3">HIF, hypoxia-inducible factor.</p>
                    <p>1. Witt KE, Huerta-Sanchez E. Philos Trans R Soc Lond B Biol Sci. 2019;374(1777):20180235.</p>
                    <p>2. PhysicalGeography.net. Available at: http://www.physicalgeography.net/fundamentals/7d.html. Date accessed: October 2022.</p>
                    <p>3. Hypoxico. Available at: https://hypoxico.com/pages/altitude-to-oxygen-chart. Date accessed: October 2022.</p>
                    <p>4. NHS. Available at: https://www.nhs.uk/conditions/altitude-sickness/. Date accessed: October 2022.</p>
                    <p>5. Tremblay JC, Ainslie PN. Proc Nat Acad Sci USA. 2021;118(18):e2102463118.</p>
                    <p>6. Nimsdai. Available at: https://www.nimsdai.com/14-peaks-film. Date accessed: October 2022.</p>
                    <p>7. Yi X et al. Science. 2010;329(5987):75–78.</p>
                </div>
                <QRInfo/>
            </footer>
        </motion.article>
    )
}