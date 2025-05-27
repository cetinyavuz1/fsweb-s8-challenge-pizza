import React from "react";
import "./Layout.css"

export default function HeaderAlt() {
  return (
    <section className="menu">
      <div className="header-alt">
        <img id="kore" src="/assets/iteration-2/icons/1.svg" />
        <p>YENİ! Kore</p>
      </div>
      <div className="header-alt">
        <img src="/assets/iteration-2/icons/2.svg" />
        <p>Pizza</p>
      </div>
      <div className="header-alt">
        <img src="/assets/iteration-2/icons/3.svg" />
        <p>Burger</p>
      </div>
      <div className="header-alt">
        <img src="/assets/iteration-2/icons/4.svg" />
        <p>Kızartmalar</p>
      </div>
      <div className="header-alt">
        <img src="/assets/iteration-2/icons/5.svg" />
        <p>Fast food</p>
      </div>
      <div className="header-alt">
        <img src="/assets/iteration-2/icons/6.svg" />
        <p>Gazlı İçecek</p>
      </div>
    </section>
  )
}