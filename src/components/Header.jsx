import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Layout.css"

export default function Header() {
    return (
        <header className="anaHeader">
            <img className="logo" src="assets/iteration-1/logo.svg" />
            <p className="firsat">fırsatı kaçırma</p>
            <p className="header-yazi">KOD ACIKTIRIR</p>
            <p className="header-yazi">PIZZA, DOYURUR</p>
            <Link to="/SiparisForm"><button className="aciktimbtn">ACIKTIM</button></Link>
        </header>
    )
}