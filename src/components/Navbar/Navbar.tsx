import React from "react";
import ButtonNavbar from "./ButtonNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import SlideContext, { left, right } from "../../contexts/SlideContext"
import { motion } from "framer-motion"

interface NavbarProps {
    next: string
}

const sectionLength: Record<string, number> = {
    1: 4,
    2: 4,
    3: 3,
    4: 4
}

export default () => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext);
    const navigate = useNavigate()
    const { section, page } = useParams();

    const isFirstPage = page === "0"
    const isLastPage = (Number(page!) === sectionLength[section!]);

    return (
        <motion.nav
        exit={{ opacity: 0}}
        className="absolute bottom-0 right-20 flex gap-2 z-50">
            {!isFirstPage && <ButtonNavbar onClick={() => {
                setSlideDirection(left)
                setTimeout(() => {
                    navigate(`/${section}/${Number(page!) - 1}`)
                }, 100);
            }}>
                <img src="./images/navbar-left.svg" alt="left" />
            </ButtonNavbar>}
            {!isLastPage && <ButtonNavbar onClick={() => {
                setSlideDirection(right)
                setTimeout(() => {
                    navigate(`/${section}/${Number(page!) + 1}`)
                }, 100);
            }}>
                <img src="./images/navbar-right.svg" alt="right" />
            </ButtonNavbar>}
            <ButtonNavbar onClick={() => {
                setSlideDirection(left)
                setTimeout(() => {
                    navigate(`/${section}/1`)
                }, 100);
            }}>
                <img src="./images/navbar-home.svg" alt="home" />
            </ButtonNavbar>
        </motion.nav>
    )
}