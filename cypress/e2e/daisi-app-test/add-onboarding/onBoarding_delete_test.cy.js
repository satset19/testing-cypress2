import detailAccount from "./detailAccount";

describe("Add OnBoarding", () => {
  detailAccount.forEach((el) => {
    xit("Success add on boarding", () => {
      cy.visit("reg.daisi.app");
      cy.get("#email").type(el.email);
      cy.get("#password").type(el.password);
      cy.get("button").click().url().should("include", "/home");
      cy.get("span[title='Container']").click();
      cy.get('a[href*="/container/bot-config"]').click();
      cy.get(".ant-card-actions")
        .children("li")
        .children("span")
        .last()
        .click();
      if (el.branch.slice(0, 12) === "Dwidaya Tour") {
        cy.contains("div", `Onboarding - ${el.branch.slice(13)}`);
      } else {
        cy.contains("div", `Onboarding - ${el.branch}`);
      }
      cy.get(".ant-popover-buttons").children("button").last().click();
    });
  });
});
