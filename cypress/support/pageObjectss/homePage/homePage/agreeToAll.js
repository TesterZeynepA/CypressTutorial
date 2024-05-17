/*class AgreeToAll {
    agreeToAllCookies() {
        return cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]', {timeout: 10000}).shadow()
        .find("cmm-buttons-wrapper[class='hydrated']")
        .find('wb7-button[data-test="handle-accept-all-button"]', {timeout: 10000})
        .contains("Agree to all").click()

    }
}

export default new AgreeToAll();*/

class AgreeToAll {
    agreeToAllCookies() {
        return cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]', {timeout: 30000}).shadow()
        .find("cmm-buttons-wrapper[class='hydrated']").should('be.visible')
        .find("[data-test='handle-accept-all-button']").should('be.visible').contains("Agree to all").click()
    }
}
export default new AgreeToAll();