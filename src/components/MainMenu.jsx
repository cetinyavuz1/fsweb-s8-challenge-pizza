import "./Layout.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
export default function MainMenu() {
    return (
        <section className="main">
            <section className="cards">
                <div className="first-card">
                    <h2 className="firstcard-header">Özel<br />Lezzetus</h2>
                    <p className="firstcard-p">Position: Absolute Acı Burger</p>
                   <Link to="/SiparisForm"><button className="btn-first">SİPARİŞ VER</button></Link>
                </div>
                <div className="cards-right">
                    <div className="second-card">
                        <h2 className="secondcard-header">Hackathlon<br />Burger Menü</h2>
                        <Link to="/SiparisForm"><button className="btn-second">SİPARİŞ VER</button></Link>
                    </div>
                    <div className="third-card">
                        <h2 className="thirdcard-header"><span style={{ color: "#CE2829" }}>Çoooook</span> hızlı<br />npm gibi kurye</h2>
                        <Link to="/SiparisForm"><button className="btn-second">SİPARİŞ VER</button></Link>
                    </div>
                </div>
            </section>
            <section className="paketlenen-menuler">
                <h3 className="paketlenen">en çok paketlenen menüler</h3>
                <h2 className="aciktiran">Acıktıran Kodlara Doyuran Lezzetler</h2>
                <div className="menu2">
                    <div className="hizli-menu">
                        <img src="/public/assets/iteration-2/icons/1.svg" />
                        <p>Ramen</p>
                    </div>
                    <div id="pizza" className="hizli-menu">
                        <img src="/public/assets/iteration-2/icons/2.svg" />
                        <p>Pizza</p>
                    </div>
                    <div className="hizli-menu">
                        <img src="/public/assets/iteration-2/icons/3.svg" />
                        <p>Burger</p>
                    </div>
                    <div className="hizli-menu">
                        <img src="/public/assets/iteration-2/icons/4.svg" />
                        <p>French Fries</p>
                    </div>
                    <div className="hizli-menu">
                        <img src="/public/assets/iteration-2/icons/5.svg" />
                        <p>Fast food</p>
                    </div>
                    <div className="hizli-menu">
                        <img src="/public/assets/iteration-2/icons/6.svg" />
                        <p>Soft Drinks</p>
                    </div>
                </div>
                <div className="pizzalar">
                    <div className="pizza-card">
                        <img src="public/assets/iteration-2/pictures/food-1.png" />
                        <p style={{ marginBottom: "0" }}>Terminal Pizza</p>
                        <div className="puan-fiyat">
                            <p style={{ color: "#5F5F5F" }}>4.9</p> <p style={{ color: "#5F5F5F ;" }}>(200)</p> <p style={{ fontWeight: "700" }}>60₺</p>
                        </div>
                    </div>
                    <div className="pizza-card">
                        <img src="public/assets/iteration-2/pictures/food-2.png" />
                        <p style={{ marginBottom: "0" }}>Position Absolute Acı Pizza</p>
                        <div className="puan-fiyat">
                            <p style={{ color: "#5F5F5F" }}>4.9</p> <p style={{ color: "#5F5F5F" }}>(200)</p> <p style={{ fontWeight: "700" }}>60₺</p>
                        </div>
                    </div>
                    <div className="pizza-card">
                        <img src="public/assets/iteration-2/pictures/food-3.png" />
                        <p style={{ marginBottom: "0" }}>useEffect Tavuklu Burger</p>
                        <div className="puan-fiyat">
                            <p style={{ color: "#5F5F5F" }}>4.9</p> <p style={{ color: "#5F5F5F" }}>(200)</p> <p style={{ fontWeight: "700" }}>60₺</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}