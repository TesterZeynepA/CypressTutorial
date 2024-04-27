/// <reference types="cypress" />


import homepage from "../../support/pageObjectss/homePage/homePage/homepage";
import login from "../../support/pageObjectss/login/login";

describe('Page Object Kullanimina bir Ornek', () => {
    it.only('Login Testi-Zincirleme yazimi', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })

        //anasayfaya erisim ve url baslik dogrulama
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')


        //page object login dosyasinda return this kullanildiginda zincirleme yazilabilir

        //Login kismi
        login.fillUsername('Test')
        .fillPassword('123456')
        .loginBtn('Login')

        //Error mesaji
        login.errorMsg('username')

       
    });

    it('Login Testi Zincirleme olmadan yazim', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })

        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')

        //zincirleme mantiginda yazmak istemiyorsaniz
        //ornek:

        login.fillUsername('Test')
        login.fillPassword('123456')
        login.loginBtn()
        login.errorMsg('Test')

       

    });
});