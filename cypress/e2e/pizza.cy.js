describe('Siparis Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/SiparisForm')
  })
  it("inputa bir metin giren test",() =>{
    const testNotu = "test"
    cy.get(`textArea[name="text"]`).type(testNotu).should("have.value", testNotu)
  })
  it("birden fazla malzeme testi", () =>{
    const testTopping = ["Sucuk", "Salam", "Mısır"]
    testTopping.forEach((elm) => {
      cy.get(`input[type="checkbox"][value="${elm}"]`).check().should("be.checked")
    })
  })
  it("form doldurulup gönderiliyor mu?", () => {
    cy.get(`input[type="radio"][value="Büyük"]`).check().should("be.checked")

    cy.get(`select#exampleSelect`).select("İnce")

    const testTopping = ["Sucuk", "Salam", "Mısır", "Pepperoni"]
    testTopping.forEach((elm) => {
      cy.get(`input[type="checkbox"][value="${elm}"]`).check().should("be.checked")
    })

    const testNotu = "test"
    cy.get(`textArea[name="text"]`).type(testNotu).should("have.value", testNotu)

    cy.get(`button[type="submit"]`).click()
  })
})

