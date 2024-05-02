class AutomationexerciseLogin{
    navigate() {
    cy.visit('https://www.automationexercise.com/login')
}

fillEmail(email) {
    cy.get('input[data-qa="login-email"]').should('be.empty').and('be.visible').type(email, { log: false })
    return this;
}

fillPassword(password) {
    cy.get('input[data-qa="login-password"]').should('be.empty').and('be.visible').type(password, { log: false })
    return this;
}

loginBtn (value) {
    cy.get('input[data-qa="login-button"]').should('be.visible').and('have.value', value).click()
    return this;
}

errorMsg(error) {
    cy.get('//p[text()="Your email or password is incorrect!"]').should('be.visible').and('have.text', error)
    return this;
}

verifyUserName(username){
    cy.get('i[class="fa fa-user"]').should('be.visible').and('have.text', username)
}

verifyLoginBtn(value2){
    cy.get('input[data-qa="login-button"]').should('be.visible').and('have.value', value2)
}
}
export default new AutomationexerciseLogin()
