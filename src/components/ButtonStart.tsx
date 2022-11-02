import React, { useContext } from "react";
import SlideContext, { right } from "../contexts/SlideContext";

export default ({onClick, className}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext);

    return (
        <div className="flex flex-col items-center gap-10">
            <button onClick={(e) => {
                setSlideDirection(right)
                setTimeout(() => {
                    onClick!(e)
                }, 100);
            }}  className="relative text-white">
                <img src="./images/start.svg" className="w-[calc(578px*var(--scale-x))] " />
            </button>
            <img src="./images/start-text.svg" className="w-[calc(345px*var(--scale-x))] " />
        </div>
    )
}