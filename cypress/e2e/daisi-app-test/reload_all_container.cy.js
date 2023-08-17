import account from "../daisi-app-test/add-direct-message/detailAccount";
describe("Check login", () => {
  account.map((el) => {
    it("Success Login", () => {
      cy.visit("reg.daisi.app").url().should("include", "/login");
      cy.get("#email").type(el.email);
      cy.get("#password").type(el.password);
      cy.get("button").click().url().should("include", "/home");
      cy.get("span[title='Container']").click();
      cy.get('a[href*="/container/qr"]').click();
      cy.contains("span", "Reload").click();
      cy.contains("div", "Your phone is connected to Daisi!", {
        timeout: 15000,
      });
      // cy.get(
      //   'button[class="ant-btn ant-btn-round ant-btn-primary ant-btn-lg"]'
      // ).click({ multiple: true });
    });
  });
});
