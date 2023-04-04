describe("Add OnBoarding", () => {
  before(() => {
    cy.visit("reg.daisi.app");
    cy.get("#email").type("socialku69@gmail.com");
    cy.get("#password").type("Akundemo1!");
    cy.get("button").click().url().should("include", "/home");
  });
  xit("Success add on boarding", async () => {
    cy.get("span[title='Container']").click();
    cy.get('a[href*="/container/bot-config"]').click();
    cy.get(".ant-col.ant-col-24").children("button").click();
    cy.get("#title").type("Diskon 100%");
    cy.get("#phone").type("6281389318328");
    cy.get("#pattern").type("Halo min, mau diskon");
    cy.get("#reply").type(
      "Selamat anda mendapat kesempatan potongan harga 100%"
    );
    cy.get("#tags").type("diskon{enter}potongan harga{enter}");
    cy.contains("div", "Create Template").click();
    cy.get("#origin").type("Tambun");
    cy.get("#isRoundRobin").click();
    cy.get(".ant-space.ant-space-horizontal.ant-space-align-center")
      .last()
      .children()
      .last()
      .click();
  });
});
