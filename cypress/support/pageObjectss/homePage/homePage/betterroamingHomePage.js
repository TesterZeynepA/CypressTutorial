class BetterroamingHomePage {
    navigate() {
        cy.visit('https://www.betterroaming.com/');
    }

    clickElements() {
        cy.xpath('//div[@class="cursor-pointer text-[14px] font-bold uppercase flex items-center gap-x-1"]').click()
        cy.xpath('//div[text()="US Dollar"]').click()
    }

    inputDestination() {
        cy.get('//input[@placeholder="Search destination"]').select('TR')
    }

    
}

export default new BetterroamingHomePage()