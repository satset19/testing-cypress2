describe("Check login", () => {
  it("invalid Password", () => {
    cy.visit("http://localhost:3000").url().should("include", "/login");
    cy.get("#email").type("comp@mail.com");
    cy.get("#password").type("satusampaidelapan");
    cy.get("button").click();
    cy.get("span").should("include.text", "Invalid email or password");
  });
  it("Success Login", () => {
    cy.visit("http://localhost:8000").url().should("include", "/login");
    cy.get("#email").type("socialku69@gmail.com");
    cy.get("#password").type("Akundemo1!");
    cy.get("button").click().url().should("include", "/home");
  });
});
