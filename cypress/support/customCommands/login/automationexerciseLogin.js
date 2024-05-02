import automationexerciseLogin from "../../pageObjects/login/automationexerciseLogin"

// Custom Commands Kullanimi - POM ile

Cypress.Commands.add('loginNegative', () => {
    automationexerciseLogin.fillEmail('test@gmail.com')
    automationexerciseLogin.fillPassword('123456')
    automationexerciseLogin.loginBtn('Login')
    automationexerciseLogin.errorMsg('Your email or password is incorrect!')
})

Cypress.Commands.add('loginPozitive', (email, password,value,username,value2) => {
    automationexerciseLogin.fillEmail(email)
    automationexerciseLogin.fillPassword(password)
    automationexerciseLogin.loginBtn(value)
    automationexerciseLogin.verifyUserName(username)
    })

Cypress.Commands.add('loginButtonVerify', (value2) => {
    automationexerciseLogin.verifyLoginBtn(value2)
})