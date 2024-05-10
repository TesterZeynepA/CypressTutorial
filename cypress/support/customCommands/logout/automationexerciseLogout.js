Cypress.Commands.add('automationexerciseLogout', () => {
    
    cy.xpath('//a[text()=" Logout"]').should('be.visible').click()
})