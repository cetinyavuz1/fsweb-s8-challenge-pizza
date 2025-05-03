import "./Layout.css"

export default function Footer() {
    return(
        <footer className="footer-section">
        <div className="footer-first">
          <address className="address-section">
            <img className ="footer-logo" src="/public/assets/iteration-2/footer/logo-footer.svg"/>
            <div className="ilk-satir">
              <img className="icon-image" src="/public/assets/iteration-2/footer/icons/icon-1.png"/>
              <p>341 Londonderry Road,<br/>Istanbul Türkiye</p>
            </div>
            <div className="ikinci-satir">
              <img className="icon-image" src="/public/assets/iteration-2/footer/icons/icon-2.png"/>
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="ucuncu-satir">
              <img className="icon-image" src="/public/assets/iteration-2/footer/icons/icon-3.png"/>
              <p>+90 216 123 45 67</p>
            </div>
          </address>
          <div className="hot-menu">
            <h2 className="hot-menu-header">Hot Menu</h2>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
          <div className="instagram">
            <h2 className="instagram-header">Instagram</h2>
            <div className="footer-images">
              <img src="/public/assets/iteration-2/footer/insta/li-0.png"/>
              <img src="/public/assets/iteration-2/footer/insta/li-1.png"/>
              <img src="/public/assets/iteration-2/footer/insta/li-2.png"/>
              <img src="/public/assets/iteration-2/footer/insta/li-3.png"/>
              <img src="/public/assets/iteration-2/footer/insta/li-4.png"/>
              <img src="/public/assets/iteration-2/footer/insta/li-5.png"/>
            </div>
          </div>
        </div>
        <div className="footer-second">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa fa-twitter"></i>
        </div>
      </footer>
    )
}