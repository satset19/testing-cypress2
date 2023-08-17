// import container from "../daisi-app-test/TestContainer/account";

describe("Delete Contact", () => {
  it(`USer13`, () => {
    cy.visit("https://chat.daisi.app/");
    cy.get('input[name="email"]', { timeout: 10000 }).type(
      "user13@daisitravel.id"
    );
    cy.get('input[name="password"]').type("Balidays123!");
    cy.get("form").submit();
    cy.contains("a", "Contact").click();
    // cy.get('input[type="text"]').type("628111158682", { force: true });
    // cy.contains("span", "Search").click({ force: true });
    for (let i = 0; i < 91; i++) {
      cy.get('svg[data-testid="NotInterestedIcon"]', { timeout: 10000 })
        .last()
        .click();
      cy.contains("button", "Submit").click();
      cy.contains("div", "Success delete contact");
      cy.reload();
    }
  });
  // container.map((el) => {
  // });
});
