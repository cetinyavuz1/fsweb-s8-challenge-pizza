import React from "react"
import { Form, FormGroup, Input, Label } from "reactstrap"
import "./SiparisForm.css"
import SiparisToplami from "./SiparisToplami"


const malzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
    "Sarımsak", "Biber", "Salam", "Ananas", "Kabak"]

export default function SiparisForm({ handleSubmit, malzemeSayisi, setMalzemeSayisi, hamur, setHamur, boyut, setBoyut, secimler, fiyat, pizzaAdet, setPizzaAdet }) {


    const handleChange = (event) => {
        const { value, checked } = event.target;

        if (checked && malzemeSayisi.length < 10) {
            setMalzemeSayisi([...malzemeSayisi, value]);
        } else if (!checked) {
            setMalzemeSayisi(malzemeSayisi.filter((elm) => elm !== value));
        }
    }

    const handleChangeiki = (event) => {
        const { value } = event.target
        setBoyut(value)
    }

    const handleChangeuc = (event) => {
        const { value } = event.target
        setHamur(value)
    }

    return (

        <>
            <div className="siparissayfasi">

                <h5 className="headerPizza">Position Absolute Acı Pizza</h5>
                <div className="fiyatYorum">
                    <p className="fiyat">85.50₺</p>
                    <div className="puanlama">
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <p className="pizzaAciklama">Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                    Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
                    odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
                    hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                <Form className="siparisFormu" onSubmit={handleSubmit}>
                    <div className="hamur">
                        <FormGroup tag="fieldset">
                            <legend>
                                <h5 className="hamurBoyut">Boyut Seç<span style={{ color: "red" }}>*</span></h5>
                            </legend>
                            <FormGroup check>

                                {' '}
                                <Label check>
                                    <Input
                                        name="radio1"
                                        type="radio"
                                        value="Küçük"
                                        checked={boyut === "Küçük"}
                                        onChange={handleChangeiki}
                                    />
                                    Küçük
                                </Label>
                            </FormGroup>
                            <hr />
                            <FormGroup check>

                                {' '}
                                <Label check>
                                    <Input
                                        name="radio1"
                                        type="radio"
                                        value="Orta"
                                        checked={boyut === "Orta"}
                                        onChange={handleChangeiki}
                                    />
                                    Orta
                                </Label>
                            </FormGroup>
                            <hr />
                            <FormGroup check>

                                {' '}
                                <Label check>
                                    <Input
                                        name="radio1"
                                        type="radio"
                                        value="Büyük"
                                        checked={boyut === "Büyük"}
                                        onChange={handleChangeiki}
                                    />
                                    Büyük
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                <h5 className="hamurBoyut">Hamur Seç<span style={{ color: "red" }}>*</span></h5>
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={handleChangeuc}
                                defaultValue=""
                            >
                                <option value="" disabled hidden>
                                    Hamur Seçiniz
                                </option>
                                <option value="İnce">
                                    İnce
                                </option>
                                <option value="Orta">
                                    Orta
                                </option>
                                <option value="Kalın">
                                    Kalın
                                </option>
                            </Input>
                        </FormGroup>
                    </div>
                    <h5 className="ekMalzeme">Ek Malzemeler</h5>
                    <p className="maxMalzeme">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <p className="minMalzeme" >En az 4 malzeme seçmelisiniz!!</p>
                    <div className="malzemeler">
                        {malzemeler.map((elm) => {
                            return (
                                <FormGroup key={elm}>
                                    <Label check className="malzeme">
                                        <Input
                                            value={elm}
                                            type="checkbox"
                                            onChange={handleChange}
                                            disabled={malzemeSayisi.length >= 10 && !malzemeSayisi.includes(elm)}
                                            checked={malzemeSayisi.includes(elm)} />
                                        {elm}
                                    </Label>
                                </FormGroup>
                            )
                        })}
                    </div>
                    <FormGroup className="siparisNotu">
                        <Label for="exampleText">
                            <h5 className="siparisNot">Sipariş Notu</h5>
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                        />
                    </FormGroup>
                    <SiparisToplami boyut={boyut} hamur={hamur} secimler={secimler} fiyat={fiyat} pizzaAdet={pizzaAdet} setPizzaAdet={setPizzaAdet} malzemeSayisi={malzemeSayisi} />
                </Form>

            </div>
        </>

    )
}