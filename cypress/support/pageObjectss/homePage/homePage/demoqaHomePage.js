
class DemoqaHomePage {
    navigate() {
        cy.visit('https://demoqa.com/');
    }

    clickElements() {
        cy.get('div h5').contains('Elements').click()
    }
}

export default new DemoqaHomePage()