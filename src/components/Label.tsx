import React from "react";

export default ({children, className, style}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div 
        style={style}
        className="flex flex-col items-center gap-10">
            <div className="relative text-white">
                <div className={`w-[379px] h-[62px] -skew-x-[20deg] ${className}`}></div>
                <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-3xl w-full">{children}</span>
            </div>
        </div>
    )
}