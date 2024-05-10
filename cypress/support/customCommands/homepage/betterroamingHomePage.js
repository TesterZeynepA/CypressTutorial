import betterroamingHomePage from "../../pageObjectss/homePage/homePage/betterroamingHomePage"

Cypress.Commands.add('homepage', () => {

    cy.on('uncaught:exception', (err, runnable) => { return false })
    betterroamingHomePage.navigate()
})

Cypress.Commands.add('selectEuro', () => {
   betterroamingHomePage.clickElements()
})

Cypress.Commands.add('selectDestination', (country1) => {
    betterroamingHomePage.inputDestination(country1)
})

Cypress.Commands.add('getVerifies', (country, data, valid, planType, price) => {
    betterroamingHomePage.getVerifies(country, data, valid, planType, price)
})