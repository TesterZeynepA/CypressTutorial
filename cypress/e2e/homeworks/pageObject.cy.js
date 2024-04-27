/// <reference types="cypress" />

/**
 Page Object Modeli kullanarak yapilacak olan gunun odevi :)
1. https://demoqa.com/ sitesine gidiniz
2. Anasayfada goruntulenen "Elements" kategorisine cy.contains() kullanarak tiklayiniz.
3. Solda goruntulenen elements altindaki seceneklerden Text Box'i tiklayiniz. cy.get, 
find ve contains'i birlikte kullanarak.
cy.get(' ').find(' ').contains(' ').click()
4. Acilan formda sol kisimda bulunan Full Name, Email, Current Address, Permanent Address 
yazilarini dogrulayin.
5. Form kisminda bulunan alanlari doldurup Submit butonuna tiklayiniz.
Optional: Dileyenler submit butonuna tikladiktan sonra degerleri dogrulama yapabilir
 */

import demoqaHomePage from "../../support/pageObjectss/homePage/homePage/demoqaHomePage";
import elementPage from "../../support/pageObjectss/elementsPage/elementPage";
import textBoxPage from "../../support/pageObjectss/textBoxPage/textBoxPage";

describe('demoqa homework', () => {
    it('homework', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        //1. https://demoqa.com/ sitesine gidiniz
        demoqaHomePage.navigate()
        //2. Anasayfada goruntulenen "Elements" kategorisine cy.contains() kullanarak tiklayiniz.
        demoqaHomePage.clickElements()
        //3. Solda goruntulenen elements altindaki seceneklerden Text Box'i tiklayiniz.
        elementPage.clickTextBox()
        //4. Acilan formda sol kisimda bulunan Full Name, Email, Current Address, Permanent Address 
        // yazilarini dogrulayin.
        textBoxPage.verifyFullName('Full Name')
        textBoxPage.verifyEmail('Email')
        textBoxPage.verifyCurrentAddress('Current Address')
        textBoxPage.verifyPermanentAddress('Permanent Address')
        //5. Form kisminda bulunan alanlari doldurup Submit butonuna tiklayiniz.
        textBoxPage.fillFullName('Zeynep Aytop')
        textBoxPage.fillEmail('zeyneppaytop@gmail.com')
        textBoxPage.fillCurrentAddress('Istanbul, Turkiye')
        textBoxPage.fillPermanentAddress('Istanbul, Turkiye')
        textBoxPage.clickSubmit()

        //Optional: Dileyenler submit butonuna tikladiktan sonra degerleri dogrulama yapabilir
        textBoxPage.verifyVisibleName('Name:Zeynep Aytop')
        textBoxPage.verifyVisibleEmail('Email:zeyneppaytop@gmail.com')
        textBoxPage.verifyVisibleCurrentAddress('Current Address :Istanbul, Turkiye')
        textBoxPage.verifyVisiblePermanentAddress('Permananet Address :Istanbul, Turkiye')

    });
});

