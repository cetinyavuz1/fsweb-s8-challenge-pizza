import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SiparisAlindi from "./components/SiparisAlindi"
import Siparis from "./components/Siparis"
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import Header from "./components/Header"
import HeaderAlt from "./components/HeaderAlt"
import MainMenu from "./components/MainMenu"
import Footer from "./components/Footer"


function App() {
  const [pizzaAdet, setPizzaAdet] = useState(1)
  const [malzemeSayisi, setMalzemeSayisi] = useState([])

  const adetFiyat = 85.50
  const secimler = malzemeSayisi.length * 5
  const fiyat = (secimler + adetFiyat) * pizzaAdet


  return (
    <div>
        <Switch>
          <Route path='/' exact>
            <Header />
            <HeaderAlt/>
            <MainMenu/>
          </Route>
          <Route path="/SiparisForm">
            <Siparis setMalzemeSayisi={setMalzemeSayisi} malzemeSayisi={malzemeSayisi} secimler={secimler} fiyat={fiyat} pizzaAdet={pizzaAdet} setPizzaAdet={setPizzaAdet} />
          </Route>
          <Route path='/SiparisAlindi'>
            <SiparisAlindi secimler={secimler} fiyat={fiyat} />
          </Route>
        </Switch>
        <Footer/>
    </div>
  )
}

export default App
