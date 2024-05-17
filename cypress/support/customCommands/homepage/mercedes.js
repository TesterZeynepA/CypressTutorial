import agreeToAll from "../../pageObjectss/homePage/homePage/agreeToAll"

Cypress.Commands.add('agreeAllCookies', () => {
    //Traverse into the shadow DOM of an element
    agreeToAll.agreeToAllCookies()
})