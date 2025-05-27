import React from "react";
import { useLocation } from "react-router-dom";
import "./SiparisAlindi.css"

export default function SiparisAlindi({ secimler, fiyat }) {
    const location = useLocation();
    const { boyut, hamur, malzemeSayisi } = location.state || {};

    return (
        <div className="siparisAlindi">
            <img className="siparisAlindiLogo" src="/images/iteration-1-images/logo.svg" alt="" />
            <h6 className="lezzet">lezzetin yolda</h6>
            <h2 className="siparisText" >SİPARİŞ ALINDI</h2>
            <p className="pizzaText" >Position Absolute Acı Pizza</p>
            <div className="pizzaOzellik">
                <p className="ozellik" ><span className="ozellikText">Boyut:</span> {boyut}</p>
                <p className="ozellik" ><span className="ozellikText">Hamur:</span> {hamur}</p>
                <p className="ozellik" ><span className="ozellikText">Malzemeler:</span> {malzemeSayisi?.join(", ")}</p>
            </div>
            <div className="toplamTutar2">
                <h5 className="toplamHeader2">Sipariş Toplamı</h5>
                <div className="secimler2">
                    <p>Seçimler</p>
                    <p>{secimler}₺</p>
                </div>
                <div className="toplampara2">
                    <p>Toplam</p>
                    <p>{fiyat}₺</p>
                </div>

            </div>
        </div>
    );
}