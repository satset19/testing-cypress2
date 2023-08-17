import detailAccount from "./detailAccount";
const configYa = [
  {
    label: "Onboarding - YA",
    text: "YA",
    reply:
      "Terima kasih atas konfirmasi Anda. Nantikan promo menarik dari kami.",
    origin: "YA",
  },
  {
    label: "Onboarding - Ya",
    text: "Ya",
    reply:
      "Terima kasih atas konfirmasi Anda. Nantikan promo menarik dari kami.",
    origin: "YA",
  },
  {
    label: "Onboarding - ya",
    text: "ya",
    reply:
      "Terima kasih atas konfirmasi Anda. Nantikan promo menarik dari kami.",
    origin: "YA",
  },
];
const configTidak = [
  {
    label: "Onboarding - TIDAK",
    text: "TIDAK",
    reply: "Terima kasih atas konfirmasi Anda.",
    tag: "Tidak Subs",
    origin: "TIDAK",
  },
  {
    label: "Onboarding - Tidak",
    text: "Tidak",
    reply: "Terima kasih atas konfirmasi Anda.",
    tag: "Tidak Subs",
    origin: "TIDAK",
  },
  {
    label: "Onboarding - tidak",
    text: "tidak",
    reply: "Terima kasih atas konfirmasi Anda.",
    tag: "Tidak Subs",
    origin: "TIDAK",
  },
];

describe("Add OnBoarding", () => {
  detailAccount.map((el) => {
    it(`Success add on boarding ${el.email.replace(
      /[^0-9]/g,
      ""
    )}DWIDAY`, () => {
      cy.visit("https://reg.daisi.app", { timeout: 100000 });
      cy.log(el.branch.slice(0, 12));
      cy.get("#email").type(`${el.email}`);
      cy.get("#password").type(`${el.password}`);
      cy.get("button").click().url().should("include", "/home");
      cy.get("span[title='Container']").click();
      cy.get('a[href*="/container/bot-config"]').click();
      configYa.forEach((obj) => {
        cy.get(".ant-col.ant-col-24").children("button").click();
        cy.get("#title").type(obj.label);
        cy.get("#phone").type(`${el.phone}`);
        cy.get("#pattern").type(obj.text);
        cy.get("#reply").type(obj.reply);
        cy.get("#tags").type(`${el.branch.replace(/\s/g, "")}{enter}`);
        cy.contains("div", "Create Template").click();
        cy.get("#origin").type(obj.origin);
        cy.get("#isRoundRobin").click();
        cy.get(".ant-space.ant-space-horizontal.ant-space-align-center")
          .last()
          .children()
          .last()
          .click();
      });
      configTidak.forEach((obj) => {
        cy.get(".ant-col.ant-col-24").children("button").click();
        cy.get("#title").type(obj.label);
        cy.get("#phone").type(`${el.phone}`);
        cy.get("#pattern").type(obj.text);
        cy.get("#reply").type(obj.reply);
        cy.get("#tags").type(obj.tag);
        cy.contains("div", "Create Template").click();
        cy.get("#origin").type(obj.origin);
        cy.get("#isRoundRobin").click();
        cy.get(".ant-space.ant-space-horizontal.ant-space-align-center")
          .last()
          .children()
          .last()
          .click();
      });
      cy.wait(3000);
    });
  });
});
