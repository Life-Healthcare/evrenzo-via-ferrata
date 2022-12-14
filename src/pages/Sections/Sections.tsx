import React from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import SmallText from "../../components/SmallText"
import Triangle from "../../components/Triangle"
import sessionManager from "../../services/session-manager"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"
import Section3 from "./Section3/Section3"
import Section4 from "./Section4/Section4"

export default () => {
    const { section, page } = useParams()

    useEffect(() => {
        let timeout: number | undefined;
        // Send sessions to server every 1 minute
        (async function sendToServer() {
          await sessionManager.sendToServer();
          clearTimeout(timeout);
          timeout = window.setTimeout(sendToServer, 60000);
        })();
        return () => clearTimeout(timeout);
      }, []);

    useEffect(() => {
        if(page === "1") {
            sessionManager.start();
            console.log("session started")
        }

        sessionManager.page(page!);
        console.log('session page', page)

        if(["1,4", "2,4", "3,3", "4,4"].includes(`${section},${page}`)) {
            sessionManager.end();
            console.log('session ended')
        }
    }, [page]);

    return (
        <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
            {section === "1" && <Section1/>}
            {section === "2" && <Section2/>}
            {section === "3" && <Section3/>}
            {section === "4" && <Section4/>}
            {page !== "1" && <p className={`${`${section},${page}` === "1,3" && 'text-white ml-9'} absolute bottom-0 left-2/4 -translate-x-2/4 text-2xl font-bold`}><Triangle/> EVRENZO<SmallText>TM</SmallText> is subject to additional monitoring.</p>}
        </div>
    )
}
