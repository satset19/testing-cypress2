describe("Add OnBoarding", () => {
  before(() => {
    cy.visit("reg.daisi.app");
    cy.get("#email").type("socialku69@gmail.com");
    cy.get("#password").type("Akundemo1!");
    cy.get("button").click().url().should("include", "/home");
  });
  it("Success add on boarding", () => {
    cy.get(".ant-pro-menu-submenu.ant-design-pro-layout-lo3kc4").click();
    cy.get('a[href*="/container/bot-config"]').click();
    cy.get(".ant-card-actions").children("li").children("span").last().click();
    cy.get(".ant-popover-buttons").children("button").last().click();
  });
});
