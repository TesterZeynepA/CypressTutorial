/// <reference types= "cypress" />
import homepage from "../../support/pageObjects/homepage/homepage";

describe('Alias - Then - Wrap - Each Kullanim Ornekleri', () => {
    it('Alias Ornek Kullanim', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        homepage.navigate()
        cy.get('#customer_login').as('h2LoginDogrula')
        cy.get('@h2LoginDogrula').should('contain', 'Login')
        cy.get('@h2LoginDogrula').should('contain', 'Username')
    });

    it('Then Ornek Kullanim', () => {
        cy.get('#customer_login').as('h2LoginDogrula')
        .then(() => {
            cy.get('@h2LoginDogrula').should('contain', 'Login')
            cy.get('@h2LoginDogrula').should('contain', 'Username')

            login.fillUsername('deneme123@test.com')
            login.fillPassword('Deneme@12345')
            login.loginBtn('Login')
        }).then(() => {
            cy.wait(2000)
            cy.logout()
        })
    });

    it('Wrap ve Each Kullanim Ornegi', () => {
        cy.get('input[type="email"]').each((el) => {
            cy.log(el)
            cy.wrap(el).type('Test')
        })

        cy.get('input[type="submit"]').each((el) => {
    });
});