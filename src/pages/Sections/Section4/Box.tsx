import { useContext } from "react"
import { currentBoxContext } from "./Two"
import { motion } from "framer-motion"

interface BoxProps {
    title: string,
    children?: React.ReactNode,
    className?: string,
    image?: boolean
}

export default ({children, className, title, image}: BoxProps) => {
    const [currentBox, setCurrentBox] = useContext(currentBoxContext);
    const show = title === currentBox;

    return (
        <>
            <div onClick={() => setCurrentBox(title)} className={`flex items-center relative w-[854px] h-[156px] px-20 text-white`}>
                <div className={`-skew-x-[20deg] w-full h-full absolute top-0 left-0 ${className}`}></div>
                <div className="flex gap-20 items-center relative z-10">
                    <img src="./images/prompt-tap.svg" className="brightness-[1000]" alt="tap" />
                    <p className="text-2xl">
                        {title}
                    </p>
                </div>
            </div>
            {show && <motion.div 
            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className={`flex flex-col p-32 gap-5 text-black ${image ? 'section4-2-img' : 'before:bg-white'} absolute z-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[1418px] h-[1180px] border-bottom-right-cut-sm`}>
                <div className="relative w-full h-full z-50">
                    {children}
                </div>
                <button 
                    onClick={(e) => {e.stopPropagation(); setCurrentBox(null)}}
                    className="absolute top-10 right-10 z-20">
                    <img className={image ? 'brightness-0' : 'filter-green'} src="./images/close.svg" alt="close" />
                </button>
            </motion.div>}
        </>
    )
}
