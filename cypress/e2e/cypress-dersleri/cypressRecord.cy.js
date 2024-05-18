/// <reference types= "cypress" />


describe('Cypress Record', () => {
    it('Test runner kullanilarak record islemi', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practice.expandtesting.com/');
        cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .card-title > .my-link').click();
        cy.get('#username').clear('username');
        cy.get('#username').type('username');
        cy.get('#password').clear('1');
        cy.get('#password').type('1234');
        cy.get('#login > .btn').click();
        cy.get('.btn-close').click();
        cy.get('#username').clear('p');
        cy.get('#username').type('practice');
        cy.get('#password').clear();
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('#login > .btn').click();
        cy.get('.btn-close').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('cypress record denemesi -2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practice.expandtesting.com/');
        cy.get('#examples > :nth-child(3) > :nth-child(3) > .card > .card-body > .card-title > .my-link').click();
        /* ==== End Cypress Studio ==== */
    });
});