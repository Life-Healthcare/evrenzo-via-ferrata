import React from "react";
import DisclaimerBottom from "./DisclaimerBottom"

export default () => {
    return (
        <footer className="flex flex-col justify-end gap-12 h-[223px] text-2xl text-start font-semibold relative z-10">
            <DisclaimerBottom/>
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <p>MAT-NL-EVZ-2022-00020</p>
                    <p>Date of preparation: October 2022</p>
                    <p>Date of expiry: October 2024</p>
                </div>
                <p className="w-[625px]">
                © October 2022 Astellas Pharma Inc. or its affiliates.
                <br />
                All trademarks are the property of their respective owners.
                </p>
            </div>
        </footer>
    )
}