class textBoxPage {
    verifyFullName(text) {
        cy.get('#userName-label').should('be.visible').and('have.text', text)
    }

    verifyEmail(text) {
        cy.get('#userEmail-label').should('be.visible').and('have.text', text)
    }

    verifyCurrentAddress(text) {
        cy.get('#currentAddress-label').should('be.visible').and('have.text', text)
    }

    verifyPermanentAddress(text) {
        cy.get('#permanentAddress-label').should('be.visible').and('have.text', text)
    }

    fillFullName(name) {
        cy.get('[placeholder="Full Name"]').should('be.visible').and('be.empty').type(name)
    }

    fillEmail(email) {
        cy.get('[placeholder="name@example.com"]').should('be.visible').and('be.empty').type(email)
    }

    fillCurrentAddress(address) {
        cy.get('[placeholder="Current Address"]').should('be.visible').and('be.empty').type(address)
    }

    fillPermanentAddress(address) {
        cy.get('#permanentAddress').should('be.visible').and('be.empty').type(address)
    }

    clickSubmit() {
        cy.get('#submit').should('be.visible').and('be.enabled').click()
    }

    verifyVisibleName(name){
        cy.get('#name').should('have.text', name)
    }

    verifyVisibleEmail(email){
        cy.get('#email').should('be.visible').and('have.text', email)
    }

    verifyVisibleCurrentAddress(address){
        cy.get('.border > #currentAddress').should('be.visible').and('include.text', address)
    }

    verifyVisiblePermanentAddress(address){
        cy.get('.border > #permanentAddress').should('be.visible').and('include.text', address)
    }
}

export default new textBoxPage()