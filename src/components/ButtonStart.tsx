import { useContext } from "react";
import SlideContext, { right } from "../contexts/SlideContext";

export default ({onClick}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext);

    return (
        <div className="flex flex-col items-center gap-10">
            <button onClick={(e) => {
                setSlideDirection(right)
                setTimeout(() => {
                    onClick!(e)
                }, 100);
            }}  className="relative text-white">
                <div className="bg-primary w-[576px] h-24 -skew-x-[20deg]"></div>
                <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-3xl">Start</span>
            </button>
            <p className="w-80 text-xl">By clicking “Start” you confirm that you are a Healthcare Professional</p>
        </div>
    )
}