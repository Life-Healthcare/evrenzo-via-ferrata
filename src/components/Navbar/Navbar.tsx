import ButtonNavbar from "./ButtonNavbar"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import SlideContext, { left, right } from "../../contexts/SlideContext"

interface NavbarProps {
    next: string
}

export default ({next}: NavbarProps) => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext);
    const navigate = useNavigate()

    return (
        <nav className="absolute bottom-0 right-0 flex gap-2">
            <ButtonNavbar onClick={() => {
                setSlideDirection(left)
                setTimeout(() => {
                    navigate(-1)
                }, 100);
            }}>
                <img src="/images/navbar-left.svg" alt="left" />
            </ButtonNavbar>
            <ButtonNavbar onClick={() => {
                setSlideDirection(right)
                setTimeout(() => {
                    navigate(`/${next}`)
                }, 100);
            }}>
                <img src="/images/navbar-right.svg" alt="right" />
            </ButtonNavbar>
            <ButtonNavbar onClick={() => navigate("/")}>
                <img src="/images/navbar-home.svg" alt="home" />
            </ButtonNavbar>
        </nav>
    )
}