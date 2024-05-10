/// <reference types="cypress" />

import betterroamingHomePage from "../../support/pageObjectss/homePage/homePage/betterroamingHomePage";
import betterroamingCredentials from "../../fixtures/betterroaming/betterroamingCredentials.json";

/*1. https://www.betterroaming.com/ adresini gidin
2. Para birimi olarak Euro'yu seçin
3. Choose your destination kısmına Turkey yazıp aratın
4. İkinci planın aşağıdaki değerlere sahip olup olmadığını kontrol edin:
Countries: Turkey
Data: 5GB
Valid: 30 DAYS
Plan type: Data only
Price 8,49 €
Page Object Modeli uygulayın
Custom Commands'ı uygulayın
Verileri Kullanmak için Fixtures klasöründen faydalanın. */

describe('Fixture kullanarak test etme', () => {
    it('Fixture ile test', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        betterroamingHomePage.navigate()
        betterroamingHomePage.selectEuro()
        betterroamingHomePage.selectDestination(betterroamingCredentials.country1)
        betterroamingHomePage.verifyData(betterroamingCredentials.data)
        betterroamingHomePage.verifyValid(betterroamingCredentials.valid)
        betterroamingHomePage.verifyPlanType(betterroamingCredentials.planType)
        betterroamingHomePage.verifyPrice(betterroamingCredentials.price)
        
    });
    
});