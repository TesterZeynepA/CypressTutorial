describe("PracticeTestRecord", () => {
  it("tests PracticeTestRecord", () => {
    cy.viewport(1226, 945);
    cy.visit("https://practice.expandtesting.com/");
    cy.get("#search-input").click();
    cy.get("#search-input").type("web inputs");
    cy.get("main a").click();
    cy.location("href").should("eq", "https://practice.expandtesting.com/inputs");
    cy.get("#btn-clear-inputs").click();
    cy.get("#input-number").click();
    cy.get("#input-number").type("5");
    cy.get("main > div > div").click();
    cy.get("#btn-display-inputs").click();
    cy.get("#input-text").click();
    cy.get("#input-text").type("test");
    cy.get("#btn-display-inputs").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGCIBJBKBLBMBNBOBPB

/*chrome recorder paketinin yuklenmesi icin
npm install -g @cypress/chrome-recorder
chrome uzerinden yapilan kayit isleminin json formatinda export edilmesi ve bilgisayarimiza indirilmesi gerekiyor.
Bilgisayrimizda indirme isleminden sonra terminalde convert islemini su komut ile yapiyoruz:
npx @cypress/chrome-recorder ~/Downloads/dosyaAdi.json -o=cypress/e2e/cypress-dersleri*/
