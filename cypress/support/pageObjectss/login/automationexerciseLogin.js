class AutomationexerciseLogin{

fillEmail(email) {
    cy.get('input[data-qa="login-email"]').should('be.empty').and('be.visible').type(email, { log: false })
    return this;
}

fillPassword(password) {
    cy.get('input[data-qa="login-password"]').should('be.empty').and('be.visible').type(password, { log: false })
    return this;
}

loginBtn (value) {
    cy.get('button[data-qa="login-button"]').should('be.visible').and('have.value', value).click()
    return this;
}

errorMsg(error) {
    cy.xpath('//p[text()="Your email or password is incorrect!"]').should('be.visible').and('have.text', error)
    return this;
}

verifyUserName(username){
    cy.xpath('//b[text()="test"]').should('be.visible').and('include.text', username)
}

verifyLoginBtn(value2){
    cy.xpath('//a[text()=" Signup / Login"]').should('be.visible').and('include.text', value2)
}
}

export default new AutomationexerciseLogin()