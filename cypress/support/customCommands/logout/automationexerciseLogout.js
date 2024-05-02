Cypress.Commands.add('automationexerciseLogout', () => {
    
    cy.get('i[class="fa fa-lock"]').should('be.visible').click()
})