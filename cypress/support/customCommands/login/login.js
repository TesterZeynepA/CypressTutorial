import login from "../../pageObjects/login/login"

// Custom Commands Kullanimi - POM ile

Cypress.Commands.add('login', () => {
    login.fillUsername('Test')
    login.fillPassword('123456')
    login.loginBtn('Login')
})

// Custom Commands Kullanimi - POM olmadan

Cypress.Commands.add('login2', () => {
    cy.get('input#username').should('be.empty').and('be.visible').type('Deneme', { log: false })
    cy.get('input#password').should('be.empty').and('be.visible').type('1234567')
    cy.get('input[name="login"]').should('be.visible').and('have.value', 'Login').click()
})

// Custom commands parametre kullanim

Cypress.Commands.add('login3', (username, password, text) => {
    login.fillUsername(username)
    login.fillPassword(password)
    login.loginBtn(text)
})