import account from "../daisi-app-test/add-direct-message/detailAccount";

describe("Check tag contact", () => {
  it(account[0].email, () => {
    cy.visit("https://chat.daisi.app/");
    cy.get('input[name="email"]', { timeout: 10000 }).type(account[0].email);
    cy.get('input[name="password"]').type(account[0].password);
    cy.get("form").submit();
    cy.contains("a", "Tags Manager").click({ force: true });
    account.forEach((el) => {
      cy.contains("button", "+ Add Tag").click({ force: true });
      cy.get('input[id="tag"]').type(`${el.branch.replace(/\s/g, "")}`);
      cy.get('input[id="description"]').type(`Branch Tag`);
      cy.get('textarea[id="notes"]').type(`Branch Tag`);
      cy.contains("button", "Submit").click({ force: true });
      cy.contains("div", `Successfully added ${el.branch.replace(/\s/g, "")}!`);
      //   cy.get('input[type="text"]').type("628111158682", { force: true });
      //   cy.contains("span", "Search").click({ force: true });
      //   cy.contains("span", `${el.branch.replace(/\s/g, "")}`);
      //   cy.wait(10000);
    });
  });
});
