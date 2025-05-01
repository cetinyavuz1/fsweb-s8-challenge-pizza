import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useState } from "react"
import SiparisToplami from "./SiparisToplami"
import SiparisHeader from "./SiparisHeader"
import "./Siparis.css"


const malzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
    "Sarımsak", "Biber", "Salam", "Ananas", "Kabak"]

export default function Siparis() {
    const [malzemeSayisi, setMalzemeSayisi] = useState([])

    const handleChange = (event) => {
        const { value, checked } = event.target;

        if (checked && malzemeSayisi.length < 10) {
            setMalzemeSayisi([...malzemeSayisi, value]);
        } else if (!checked) {
            setMalzemeSayisi(malzemeSayisi.filter((elm) => elm !== value));
        }
    }

    return (

        <>
            <SiparisHeader />
            <div className="siparissayfasi">
                
                <h5 className="headerPizza">Position Absolute Acı Pizza</h5>
                <div>
                    <p>85.50₺</p>
                    <div>
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                    Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
                    odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
                    hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                <Form>
                    <FormGroup tag="fieldset">
                        <legend>
                            <h5>Boyut Seç</h5>
                        </legend>
                        <FormGroup check>

                            {' '}
                            <Label check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                Küçük
                            </Label>
                        </FormGroup>
                        <FormGroup check>

                            {' '}
                            <Label check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                Orta
                            </Label>
                        </FormGroup>
                        <FormGroup check>

                            {' '}
                            <Label check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                Büyük
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">
                            <h5>Hamur Seç</h5>
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                İnce
                            </option>
                            <option>
                                Orta
                            </option>
                            <option>
                                Kalın
                            </option>
                        </Input>
                    </FormGroup>
                    <h5>Ek Malzemeler</h5>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    {malzemeler.map((elm) => {
                        return (
                            <FormGroup>
                                <Label check>
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

                    <FormGroup>
                        <Label for="exampleText">
                            <h5>Sipariş Notu</h5>
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                    </FormGroup>

                </Form>
                <SiparisToplami malzemeSayisi={malzemeSayisi} />
            </div>
        </>

    )
}