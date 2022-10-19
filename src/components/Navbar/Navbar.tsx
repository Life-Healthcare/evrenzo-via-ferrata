import ButtonNavbar from "./ButtonNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import SlideContext, { left, right } from "../../contexts/SlideContext"
import { motion } from "framer-motion"

interface NavbarProps {
    next: string
}

const sectionLength: Record<string, number> = {
    1: 2
}

export default () => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext);
    const navigate = useNavigate()
    const { section, page } = useParams();

    useEffect(() => {
        if(page === "0") {
            navigate("/")
            if(Number(section) > 1) {
                navigate(`/${Number(section) - 1}/1`)
            } else {
                navigate('/')
            }
        } else if (Number(page!) > sectionLength[section!]) {
            navigate(`/${Number(section) + 1}/1`)
        }
    }, [page])

    return (
        <motion.nav
        exit={{ opacity: 0}}
        className="absolute bottom-0 right-20 flex gap-2 z-50">
            <ButtonNavbar onClick={() => {
                setSlideDirection(left)
                setTimeout(() => {
                    navigate(`/${section}/${Number(page!) - 1}`)
                }, 100);
            }}>
                <img src="./images/navbar-left.svg" alt="left" />
            </ButtonNavbar>
            <ButtonNavbar onClick={() => {
                setSlideDirection(right)
                setTimeout(() => {
                    navigate(`/${section}/${Number(page!) + 1}`)
                }, 100);
            }}>
                <img src="./images/navbar-right.svg" alt="right" />
            </ButtonNavbar>
            <ButtonNavbar onClick={() => navigate("/")}>
                <img src="./images/navbar-home.svg" alt="home" />
            </ButtonNavbar>
        </motion.nav>
    )
}