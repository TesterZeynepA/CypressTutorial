/// <reference types="cypress" />

describe('Locator homeworks', () => {
    it('Homework', () => {

        /*Ziyaret edilecek site: https://www.automationexercise.com 

Test adimlari:
1. Sayfaya gidilecek
2. Menude bulunan Signup / Login butonuna tiklanilacak
3. Login to your account dogrulanacak
4. Username password kisminin bos oldugu ve visible oldugu dogrulanacak. 
5. Username password alanlarina random degerler girilecek
6. Login butonuna tiklanip hata mesaji dogrulanacak. 

Adimlari yaparken asagidaki komutlari kullanabilirsiniz. 
cy.get()
cy.get().find()
cy.contains()
cy.xpath()*/

//1. Sayfaya gidilecek
        cy.visit('https://www.automationexercise.com')
//2. Menude bulunan Signup / Login butonuna tiklanilacak
        cy.get('i[class="fa fa-lock"]').click()
//3. Login to your account dogrulanacak
        cy.get('.login-form > h2').should('have.text','Login to your account')
//4. Username password kisminin bos oldugu ve visible oldugu dogrulanacak.
        cy.get('[data-qa= "login-email"]').should('be.empty').and('be.visible')
        cy.get('[data-qa= "login-password"]').should('be.empty').and('be.visible')
//5. Username password alanlarina random degerler girilecek
        cy.get('[data-qa= "login-email"]').type('deneme@gmail.com')
        cy.get('[data-qa= "login-password"]').type('parola')
//6. Login butonuna tiklanip hata mesaji dogrulanacak. 
        cy.get('[data-qa= "login-button"]').click()
        cy.get('[style="color: red;"]').should('have.text','Your email or password is incorrect!')

    });
});