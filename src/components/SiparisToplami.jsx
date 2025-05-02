import React from "react"
import { Button } from "reactstrap"
import "./SiparisToplami.css"


export default function SiparisToplami({ malzemeSayisi, secimler, fiyat, pizzaAdet, setPizzaAdet }) {
    

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
                
                <Button type="submit" className="tutarButon" color="warning"><span className="siparisYazi">SİPARİŞ VER</span></Button>
                
            </div>
        </div>
    )
}