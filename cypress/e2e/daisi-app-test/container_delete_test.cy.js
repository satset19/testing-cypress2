describe("Delete Container", () => {
  beforeEach(() => {
    cy.visit("reg.daisi.app");
    cy.get("#email").type("socialku69@gmail.com");
    cy.get("#password").type("Akundemo1!");
    cy.get("button").click().url().should("include", "/home");
  });
  xit("Success delete container", () => {
    cy.get(
      ".ant-btn.ant-btn-round.ant-btn-primary.ant-btn-lg.ant-btn-dangerous",
      { timeout: 5000 }
    )
      .last()
      .click();
    cy.get(".ant-popover-inner-content")
      .children()
      .get("button")
      .last()
      .click();
  });
});
