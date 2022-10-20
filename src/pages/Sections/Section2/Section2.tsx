import { useParams } from "react-router-dom"
import Navbar from "../../../components/Navbar/Navbar";
import One from "./One"
import Two from "./Two";
import Three from "./Three";

export default () => {
    const { page } = useParams();
    return (
        <>
            {page === "1" && <One/>}
            {page === "2" && <Two/>}
            {page === "3" && <Three/>}
            {page !== "1" && <Navbar/>}
        </>
    )
}