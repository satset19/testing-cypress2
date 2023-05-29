describe("template spec", () => {
  for (let i = 0; i < 90; i++) {
    it("passes", () => {
      cy.visit("https://chat.daisi.app/");
      cy.get('input[name="email"]', { timeout: 10000 }).type(
        "socialku69@gmail.com"
      );
      cy.get('input[name="password"]').type("Akundemo1!");
      cy.get("form").submit();
      cy.contains("a", "Contact").click();
      cy.get('svg[data-testid="NotInterestedIcon"]', { timeout: 10000 })
        .last()
        .click();
      cy.contains("button", "Submit").click();
    });
  }
});
