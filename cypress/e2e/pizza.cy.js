describe('Siparistest', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/Siparis')
  })
  it("inputa bir metin giren test",() =>{
    const testNotu = "Canımsın"
    cy.get(`textArea[name="text"]`).type(testNotu).should("have.value", testNotu)
  })
})