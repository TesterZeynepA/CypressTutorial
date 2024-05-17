/// <reference types="cypress" />

import mercedesHomePage from "../../support/pageObjectss/homePage/mercedesHomePage";
import mercedesSearch from "../../fixtures/mercedesSearch.json"

/* https://www.mercedes-benz.co.uk/ sitesine 
gidilecek
▶ Cookies için çıkan pop-up kısmında Agree to all 
butonuna tıklanacak
▶ Sağ üst köşede bulunan Search kısmına tıklanıp 
‘Mercedes’ kelimesi yazılıp aratılacak
▶ Çıkan sonuç doğrulanacak ▶ Not-1: Kanala atmış olduğum GitHub linkinden yararlanmak isteyenler ipucu almak için 
bakabilir.
▶ Not-2: Gelecek dersimize kadar bu ödevin tamamlanması ve ders esnasında 3er dakikalık kısa 
bir sunum ile sunulmasını rica ediyorum  */

/**Bütün sonuç tek bir it bloğunun içinde yazılmalı
▶ Page Object Model kullanılmasına dikkat ediniz
▶ En az 1 tane Custom Commands kullanılmasına dikkat ediniz.
▶ Arama kısmına yazılacak Mercedes kelimesi için fixture 
klasöründen yararlanın
▶ Cypress Hooks kullanılmalı
▶ Alias, Then, Each, Wrap Kullanılması gerekli yerlerde hangisi 
kullanılacaksa onu tercih ediniz.
▶ Assertionları eklemeyi unutmayın! 
▶ Title, url ve başka eklemek istediğiniz doğrulamalar varsa 
optional olarak ekleyebilirsiniz. */

describe('Mercedes Task', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        mercedesHomePage.navigate()
        mercedesHomePage.verifyUrl('https://www.mercedes-benz.co.uk/')
       // mercedesHomePage.verifyTitle('Mercedes-Benz Passenger Cars')
        cy.wait(3000)
        cy.agreeAllCookies()
    });
    it('Search for Mercedes', () => {
        mercedesHomePage.searchToMercedes(mercedesSearch.searchWord)
        cy.wait(3000)
       // mercedesHomePage.verifyTitle('Search')
        mercedesHomePage.verifyMercedesSearchResult()
    });
   
});