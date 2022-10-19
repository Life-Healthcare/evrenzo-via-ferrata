import ButtonNavbar from "./ButtonNavbar"
import homeIcon from "../../images/navbar-home.svg"
import leftIcon from "../../images/navbar-left.svg"
import rightIcon from "../../images/navbar-right.svg"
import { useNavigate } from "react-router-dom"

export default () => {
    const navigate = useNavigate()

    return (
        <nav className="absolute bottom-0 right-0 flex gap-2">
            <ButtonNavbar onClick={() => navigate(-1)}>
                <img src={leftIcon} alt="left" />
            </ButtonNavbar>
            <ButtonNavbar onClick={() => navigate(1)}>
                <img src={rightIcon} alt="right" />
            </ButtonNavbar>
            <ButtonNavbar onClick={() => navigate("/")}>
                <img src={homeIcon} alt="home" />
            </ButtonNavbar>
        </nav>
    )
}