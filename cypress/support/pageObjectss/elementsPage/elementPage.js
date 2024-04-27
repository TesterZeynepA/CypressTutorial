class elementPage {
    clickTextBox() {
        cy.get('li[class="btn btn-light "]').contains('Text Box').click()
    }
}
export default new elementPage()