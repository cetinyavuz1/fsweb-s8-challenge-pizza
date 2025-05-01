import React from "react"
import SiparisToplami from "./SiparisToplami"
import SiparisHeader from "./SiparisHeader"
import SiparisForm from "./SiparisForm"
import { useState } from "react"


export default function Siparis() {
    const [malzemeSayisi, setMalzemeSayisi] = useState([])

    return (

        <>
            <SiparisHeader />
            <SiparisForm malzemeSayisi={malzemeSayisi} setMalzemeSayisi={setMalzemeSayisi} />
            <SiparisToplami malzemeSayisi={malzemeSayisi} />

        </>

    )
}