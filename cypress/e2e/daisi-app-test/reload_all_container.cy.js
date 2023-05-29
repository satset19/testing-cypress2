describe("Check login", () => {
  it("Success Login", () => {
    cy.visit("reg.daisi.app").url().should("include", "/login");
    cy.get("#email").type("dwidaya_admin12@daisi.id");
    cy.get("#password").type("Balidays123!");
    cy.get("button").click().url().should("include", "/home");
    cy.get(
      'button[class="ant-btn ant-btn-round ant-btn-primary ant-btn-lg"]'
    ).click({ multiple: true });
  });
});
