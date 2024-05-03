import homepage from "../../pageObjectss/homePage/homePage/homepage"

Cypress.Commands.add('homepage', () => {

    //Anasayfaya erisim
    cy.on('uncaught:exception', (err, runnable) => { return false })
    homepage.navigate()
})

Cypress.Commands.add('verifyUrlAndTitle', (url, title) => {
    
    //Url ve Title dogrulama
    homepage.verifyUrl(url)
    homepage.verifyTitle(title)
})