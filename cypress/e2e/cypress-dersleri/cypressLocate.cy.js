/// <reference types= "cypress" />

describe.skip('Cypress ile Locate İslemleri', () => {
    it('cy.get, contains, find', () => {
        cy.get()
        cy.contains()
        cy.get().find()
        
    });

    it('cy.xpath kullanimi', () => {
        cy.xpath()
        cy.get('//div//p[@class="deneme"]') //bu bir yanlis kullanim

        cy.get().find()
        cy.xpath().xpath()
    });
});

describe('Cypress ile locate etme ve ilk test', () => {
    it('Login Testi', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit('https://practice.automationtesting.in/my-account/')
        cy.url().should('include', 'practice.automationtesting.in')
        cy.title().should('eq', 'My Account – Automation Practice Site')

        cy.get('.u-column1 > h2').should('have.text', 'Login')

        cy.get('div h2').contains('Login').should('be.visible')

        cy.get('#username').should('be.empty').and('be.visible').type('Deneme')
        cy.wait(2000)
       // cy.get ('#username').clear()
       cy.get('#password').should('be.empty').and('be.visible').and('have.class', 'woocommerce-Input woocommerce-Input--text input-text').type('Parola')
       cy.get('input[name="login"]').should('be.visible').and('have.value', 'Login').click()
       
       cy.wait(1000)

       cy.get('.woocommerce-error').should('be.visible').and('contain', 'Deneme')

    });

    it('Register Testi', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit('https://practice.automationtesting.in/my-account/')

        cy.xpath("//input[@id='reg_email']").should('be.empty').type('Deneme')

    });
});