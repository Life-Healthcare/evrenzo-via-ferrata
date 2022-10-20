import { useParams } from "react-router-dom"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"
import Section3 from "./Section3/Section3"

export default () => {
    const { section } = useParams()

    return (
        <>
            {section === "1" && <Section1/>}
            {section === "2" && <Section2/>}
            {section === "3" && <Section3/>}
        </>
    )
}