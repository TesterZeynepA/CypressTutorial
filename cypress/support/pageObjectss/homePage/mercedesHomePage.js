
class MercedesHomePage {
    navigate() {
        cy.visit('https://www.mercedes-benz.co.uk/')
    }
    verifyUrl(url) {
        cy.url().should('include', url)
    }

    verifyTitle(title) {
        cy.title().should('eq', title)
    }

    searchToMercedes(searchWord) {
        return cy.get('fss-search-input[component-id="ce2b4a58972f77232fbf38fdf1785fff"]', {timeout: 10000}).shadow().
        find('.fss-input.webcomponent.webcomponent-nested').find('.fss-input__container').
        find('#input-search').should('be.visible').click().type(searchWord).type('{enter}')
    }

    verifyMercedesSearchResult() {
        
        cy.url().should('include', 'search.html?q=Mercedes').then((url) => {
      
            // Log the new URL
            cy.log('New URL: ', url);
    })
}
}

export default new MercedesHomePage();