import React from "react"
import SiparisHeader from "./SiparisHeader"
import SiparisForm from "./SiparisForm"
import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



export default function Siparis({secimler, fiyat, pizzaAdet, setPizzaAdet, malzemeSayisi, setMalzemeSayisi}) {
    
    const [boyut, setBoyut] = useState("")
    const [hamur, setHamur] = useState("")
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const gonderilecekForm = {
            boyut,
            hamur,
            malzemeSayisi,
        };
    
        axios.post(
            "https://reqres.in/api/pizza",
            gonderilecekForm,
            {
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            }
        )
        .then((res) => {
            console.log("Gönderilen veri:", gonderilecekForm);
            history.push({
                pathname: "/SiparisAlindi",
                state: gonderilecekForm
            });
        })
        .catch((err) => console.log(err));
    };

    return (

        <>
            <SiparisHeader />
            <SiparisForm secimler={secimler} fiyat={fiyat} pizzaAdet={pizzaAdet} setPizzaAdet={setPizzaAdet} handleSubmit={handleSubmit} boyut={boyut} setBoyut={setBoyut} setHamur={setHamur} hamur={hamur} malzemeSayisi={malzemeSayisi} setMalzemeSayisi={setMalzemeSayisi} />
        </>

    )
}