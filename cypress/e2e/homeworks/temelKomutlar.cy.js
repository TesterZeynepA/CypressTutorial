/// <reference types="cypress" />

describe('Homeworks', () => {
    it('Homework-1', () => {
       /*
1) Open the browser
2) Enter the URL “https://hava-durumu-apps.netlify.app/”
3) Enter Berlin on ınput area
4) Verify result contains Berlin
   */
  cy.visit('https://hava-durumu-apps.netlify.app/')

  cy.get('input')
    .type('Berlin')
    .should('have.value', 'Berlin')
    .type('{enter}')

    cy.wait(2000)

  cy.get('h2')
    .contains('Berlin')
    .should('be.visible')

    });

    it('Homework-2', () => {
        /*
    TESTLİO(https://testlio.com/) LİVE INTERVİEW QUESTION
1) Open the browser
2) Enter the URL “http://practice.automationtesting.in/”
3) Test whether the Home page has Three Sliders only
4) The Home page must contains only three sliders
    */
   cy.visit('http://practice.automationtesting.in/')
   cy.wait(2000)
   cy.get('.n2-ss-slider-3').find('[data-slide-duration="0"]').should('have.length',3)

})

    it.only('Homework-3', () => {
        /*
Given
 Go to https://react-shopping-cart-67954.firebaseapp.com
When
 Click random 3 Add To Cart Button
Then
 Verify that there are 3 items in the cart
And
 Click Checkout Button
*/

cy.visit('https://react-shopping-cart-67954.firebaseapp.com')

cy.contains('Add to cart').click()
cy.get('.sc-1h98xa9-0 > span').click()
cy.get('.kaJsVi > .sc-124al1g-0').click()
cy.get('.sc-1h98xa9-0 > span').click()
cy.get('.ctLSpw > .sc-124al1g-0').click()
cy.get('.sc-1h98xa9-3').should('have.text', '3')
cy.contains('Checkout').click()

    });
});