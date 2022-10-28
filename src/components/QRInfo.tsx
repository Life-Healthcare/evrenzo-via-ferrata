export default ({className}: {className?: string}) => {
    return (
        <div className={"flex flex-col gap-3 "+className}>
            <p>EVRENZO™ is only available by prescription.</p>
            <div className="grid grid-cols-2 gap-10 text-2xl min-w-[1424px]">
                <div className="flex gap-1">
                    <div className="flex flex-col">
                        <p>Astellas Pharma B.V., Sylviusweg 62, 2333 BE Leiden. For full prescribing information, please scan the QR code or <span className="underline">click here</span></p>
                        <div>
                            <p>For adverse events reporting, please contact</p>
                            <p>Pharmacovigilance.EST-C@astellas.com</p>
                        </div>
                    </div>
                    <img className="w-28 aspect-square -translate-x-5" src="./images/section1-3-qr1.svg" alt="qr1" />
                </div>
                <div className="flex">
                    <p className="w-[409px]">For more information, please consult the complete product information for EVRENZO (EMA). To access it, please scan the QR code or <span className="underline">click here</span></p>
                    <img className="w-28 aspect-square" src="./images/section1-3-qr2.svg" alt="qr2" />
                </div>
            </div>
            <p>Prescribing information may vary. Please refer to your local prescribing information.</p>
        </div>
    )
}