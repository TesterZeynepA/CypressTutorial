class BetterroamingHomePage {
    navigate() {
        cy.visit('https://www.betterroaming.com/');
    }

    clickElements() {
        cy.get('.flex justify-end min-w-[92px] items-center gap-x-2.5').should('be.visible').and('include.text', 'USD').click()
        cy.xpath('//div[text()="Euro"]').should('be.visible').and('include.text', 'Euro').click()
    }

    inputDestination(country) {
        cy.xpath('//input[@placeholder="Search destination"]').select(country)
    }

    getVerifies(country, data, valid, planType, price) {
        cy.xpath('(//div[@class="flex flex-row items-center gap-2 text-[14px] justify-between border-[#E6E6E6] border-b-[1px] pb-2 mb-2 mt-4"])[2]')
        .should('be.visible').and('include.text', country)

        cy.xpath('(//div[@class="flex flex-row items-center gap-2 text-[14px] justify-between  border-[#E6E6E6] border-b-[1px] pb-1 mb-2"])[3]')
        .should('be.visible').and('include.text', data)

        cy.xpath('(//div[@class="flex flex-row items-center gap-2 text-[14px] justify-between  border-[#E6E6E6] border-b-[1px] pb-1 mb-2"])[4]')
        .should('be.visible').and('include.text', valid)

        cy.xpath('(//div[@class="flex flex-row items-center gap-2 text-[14px] justify-between border-[#E6E6E6] border-b-[1px] pb-3 mb-3 mt-1"])[2]')
        .should('be.visible').and('include.text', planType)

        cy.xpath('//p[text()="€8.39"]').should('be.visible').and('have.text', price)


    }

    
}

export default new BetterroamingHomePage()