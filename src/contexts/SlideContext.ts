import { createContext } from "react";

export const right = {
    initial: {
        left: "100vw",
        transition: {
            duration: 0.4
        }
    },
    animate: {
        left: "0",
        transition: {
            duration: 0.4
        }
    },
    exit: {
        left: "-100vw",
        transition: {
            duration: 0.4
        }
    },
}

export const left = {
    initial: {
        left: "-100vw",
        transition: {
            duration: 0.4
        }
    },
    animate: {
        left: "0",
        transition: {
            duration: 0.4
        }
    },
    exit: {
        left: "100vw",
        transition: {
            duration: 0.4
        }
    },
}

export default createContext<any>(null);