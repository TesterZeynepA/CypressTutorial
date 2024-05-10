/// <reference types= "cypress" />


//npx cypress run --spec 'cypress/e2e/cypress-dersleri/cypressPackages.cy.js' --env grepTags=@iframe komutu ile terminalden sadece iframe tag olan test yürütülebilir.
describe('Cypress packages', {tags: ['@cypress-packages', '@cypress-dersleri']},() => {
    it('Cypress Iframe Kullanimi', {tags: '@iframe'}, () => {
        cy.visit('https://practice.expandtesting.com/iframe')

        cy.iframe('#mce_0_ifr').find('p').clear().then(() => {
            cy.iframe('#mce_0_ifr').find('p').type('Cypress iframe dersi').clear().then(() => {
                cy.iframe('#mce_0_ifr').find('p').type('Cypress iframe dersi sil yaz')
            })
        })
        
        cy.iframe('#email-subscribe').find('input[id="email"]').should('be.visible').type('example@example.com')
    });

    it('Cypress If Kullanimi', {tags: '@if'}, () => {
        cy.visit('https://practice.expandtesting.com/login')

        cy.get('input#username').if('visible').type('Test')
        cy.get('input#password').if('visible').type('Deneme')
        cy.wait(2000)
       
        cy.get('#login > .btn').if().contains('button', 'Login').click().then(() => {
            cy.get('#flash-message').if('contain', 'Your username is invalid!').log('Test Tamam!')
        }).else().log('Test Tamamlanamadi!')
    });
});

