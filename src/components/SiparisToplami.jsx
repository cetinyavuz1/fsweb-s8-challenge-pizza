import React from "react"
import { Button } from "reactstrap"
import { useState } from "react"

export default function SiparisToplami({ malzemeSayisi }) {
    const [pizzaAdet, setPizzaAdet] = useState(1)

    const arttir = (event) => {
        event.preventDefault()
        setPizzaAdet(pizzaAdet + 1)
    }
    const azalt = (event) => {
        event.preventDefault()
        if (pizzaAdet > 1) {
            setPizzaAdet(pizzaAdet - 1)
        }
    }

    const adetFiyat = 85.50
    const secimler = malzemeSayisi.length * 5
    const fiyat = (secimler + adetFiyat) * pizzaAdet


    return (
        <div>
            <div>
                <Button color="warning"onClick={azalt}>-</Button>
                <p>{pizzaAdet}</p>
                <Button onClick={arttir}>+</Button>
            </div>
            <div>
                <h5>Sipariş Toplamı</h5>
                <p>Seçimler {secimler}₺</p>
                <p>Toplam {fiyat}₺</p>
            </div>
        </div>
    )
}