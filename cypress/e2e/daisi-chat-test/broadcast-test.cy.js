const date = new Date();
const nowDate = date.toDateString();
const time = date.toTimeString().slice(0, 8);

describe("Test Broadcast", () => {
  it("Create Broadcast", () => {
    cy.visit("https://chat.daisi.app/");
    cy.get('input[name="email"]', { timeout: 10000 }).type(
      "socialku69@gmail.com"
    );
    cy.get('input[name="password"]').type("Akundemo1!");
    cy.get("form").submit();
    cy.contains(".text-lg", "Connected", { timeout: 5000 });
    cy.contains("a", "Broadcast").click();
    cy.get('input[name="label"]')
      .focus({ force: true })
      .realType(" ")
      .get('input[name="label"]')
      .focus({ force: true })
      .realType(`SocialCorps ${nowDate}`);
    cy.contains("span", "Send by phones").click({ force: true });
    cy.get("textarea[placeholder='081911770011, 081911880011']")
      .first()
      .click({ force: true })
      .realType(
        "085816975740,085780007018,08111158682,085883443152,081382613467"
      );
    cy.contains("label", "Later date").click({ force: true });
    cy.get(".react-datepicker__input-container")
      .last()
      .children()
      .click({ force: true });
    cy.contains("li", "5:00 AM").click({ force: true });
    // cy.get(".rbt-input-multi.form-control.rbt-input").realClick();
    // cy.contains("a", "ALL").realClick();

    cy.contains("button", "Add new message ").click({ force: true });
    cy.get('textarea[placeholder="Type your new message here"]')
      .focus({ force: true })
      .realType(`Test Broadcast ${nowDate} Set: ${time} Send: 05:00:00`);
    cy.contains("button", "Save").click({ force: true });
    cy.contains("span", "I agree to the").click({ force: true });
    cy.contains("button", "Submit");
  });
});
