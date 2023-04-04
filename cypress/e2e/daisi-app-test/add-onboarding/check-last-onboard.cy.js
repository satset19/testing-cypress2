import detailAccount from "./detailAccount";

describe("Check Last Onboard", () => {
  detailAccount.forEach((el) => {
    it(`Check Last ${el.sender}`, () => {
      cy.log(el.branch.slice(12));
      cy.visit("reg.daisi.app");
      cy.get("#email").type(el.email);
      cy.get("#password").type(el.password);
      cy.get("button").click().url().should("include", "/home");
      cy.get("span[title='Container']").click();
      cy.get('a[href*="/container/bot-config"]').click();
      if (el.branch.slice(0, 12) === "Dwidaya Tour") {
        cy.contains("div", `Onboarding - ${el.branch.slice(13)}`);
      } else {
        cy.contains("div", `Onboarding - ${el.branch}`);
      }
    });
  });
});
