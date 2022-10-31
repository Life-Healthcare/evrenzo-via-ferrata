import { useParams } from "react-router-dom"
import Triangle from "../../components/Triangle"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"
import Section3 from "./Section3/Section3"
import Section4 from "./Section4/Section4"

export default () => {
    const { section, page } = useParams()

    return (
        <>
            {section === "1" && <Section1/>}
            {section === "2" && <Section2/>}
            {section === "3" && <Section3/>}
            {section === "4" && <Section4/>}
            {["1,3", "1,4", "2,2", "2,3", "3,2", "4,2", "4,4"]
            .some(p => section === p.split(",")[0] && page === p.split(",")[1]) && 
            <p className="absolute bottom-0 left-2/4 -translate-x-2/4 text-2xl font-bold"><Triangle/> EVRENZOTM is subject to additional monitoring.</p>}
        </>
    )
}