describe("Add Container", () => {
  before(() => {
    cy.visit("reg.daisi.app");
    cy.get("#email").type("socialku69@gmail.com");
    cy.get("#password").type("Akundemo1!");
    cy.get("button").click().url().should("include", "/home");
  });
  it("Success add container", () => {
    cy.get(".ant-result-extra", { timeout: 15000 }).children().click();
    cy.get(".ant-modal-footer").children().get("button").last().click();
    cy.get("canvas", { timeout: 180000 });
    cy.get(".ant-spin-text", { timeout: 300000 }).should(
      "contain.text",
      "Connecting..."
    );
  });
});
