import { useParams } from "react-router-dom"
import Navbar from "../../../components/Navbar/Navbar";
import One from "./One"

export default () => {
    const { page } = useParams();
    return (
        <>
            {page === "1" && <One/>}
            {page !== "1" && <Navbar/>}
        </>
    )
}