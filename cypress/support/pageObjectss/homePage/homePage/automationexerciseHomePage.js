class AutomationexerciseHomePage {
    navigate() {
        cy.visit('https://www.automationexercise.com/login')
    }

    verifyUrl(url) {
        cy.url().should('include', url)
    }

    verifyTitle(title) {
        cy.title().should('eq', title)
    }
}

export default new AutomationexerciseHomePage()