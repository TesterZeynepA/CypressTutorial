/// <reference types="cypress" />
import automationexerciseLogin from "../../support/pageObjectss/login/automationexerciseLogin";
/*Test Case1: Negatif Login Test
1. https://www.automationexercise.com/login sayfasina gidin
2. Email alanina gecersiz bir email girin
3. Parola alanina gecersiz bir parola girin
4. Login butonuna tiklayin
5. Hata mesajini dogrulayin

Test Case2: Pozitif Login Test 
1. https://www.automationexercise.com/login sayfasina gidin
2. Email alanina gecerli bir email girin
3. Parola alanina gecerli bir parola girin
4. Login butonuna tiklayin
5. Kullanici adini dogrulayin
6. Logout butonuna tiklayin
7. Logout isleminden sonra Login butonunu dogrulayin

Bu Case'leri yazarken asagidaki adimlari uygulayiniz:
1. Page Object Modeli uygulayin
2. login ve logout icin custom commands olusturun
3. Test runner'da email ve parolanin goruntulenmemesi icin gerekli komutu type() icine yazin

Asagidaki bilgileri testlerde kullanabilirsiniz.
Gecerli email: testclarusway@test.com
Gecerli parola: test@12345 */

describe('Custom Commands ile Login testleri', () => {
    it('Test Case1: Negatif Login Test', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        automationexerciseLogin.loginNegative()
    });

    it('Test Case2: Pozitif Login Test', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        automationexerciseLogin.loginPositive('testclarusway@test.com', 'test@12345', 'Login', 'testclarusway')
        cy.automationexerciseLogout() 
        automationexerciseLogin.automationexerciseLoginButtonVerify('Login')
    });
});