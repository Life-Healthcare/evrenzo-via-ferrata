import React from "react";
import SmallText from "./SmallText"
import Triangle from "./Triangle"

export default () => {
    return (
        <div className="w-[1153px] flex flex-col gap-1">
            <p>This information is intended for international Healthcare Professionals and was created by Astellas Pharma Inc.</p>
            <p><Triangle/> EVRENZO<SmallText>TM</SmallText> is subject to additional monitoring.</p>
            <p>For adverse events reporting, please contact: Pharmacovigilance.EST-C@astellas.com</p>
            <p>EVRENZO™ is only available by prescription.</p>
            <p>Prescribing information may vary. Please refer to your local prescribing information.</p>
        </div>
    )
}