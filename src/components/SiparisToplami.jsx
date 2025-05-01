import React from "react"
import { Button } from "reactstrap"
import { useState } from "react"
import "./SiparisToplami.css"

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
        <div className="siparisToplam">
            <div className="adetButtons">
                <Button className="butonlar" color="warning" onClick={azalt}>-</Button>
                <p className="pizzaAdet">{pizzaAdet}</p>
                <Button className="butonlar" color="warning" onClick={arttir}>+</Button>
            </div>
            <div className="tutar">
                <div className="toplamTutar">
                    <h5 className="toplamHeader">Sipariş Toplamı</h5>
                    <div className="secimler">
                        <p>Seçimler</p>
                        <p>{secimler}₺</p>
                    </div>
                    <div className="toplampara">
                        <p>Toplam</p>
                        <p>{fiyat}₺</p>
                    </div>
                </div>
                <Button className="tutarButon" color="warning">SİPARİŞ VER</Button>
            </div>
        </div>
    )
}