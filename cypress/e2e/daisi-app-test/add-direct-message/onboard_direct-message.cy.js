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
      cy.contains("Direct Chat").click();
      cy.wait(2000);
      cy.contains("Edit").click();
      //       cy.get('input[id="origin"]').type("{selectall}{backspace}Direct Chat");
      //       cy.get('textarea[id="reply"]')
      //         .type(`{selectall}{backspace}*Greeting from ${el.branch}!*
      // Terima kasih Anda telah menghubungi Dwidayatour. Pesan Anda telah kami terima, Travel Consultant kami akan segera melayani Anda.

      // *Dwidayatour*
      // _Making Travel Easy_`);
      //       cy.get('button[id="active"]').click();
      cy.get(".ant-select-selection-overflow")
        .click()
        .get(".ant-select-selection-item-remove")
        .click()
        .get(".ant-select-selection-overflow")
        .click()
        .type(`${el.branch.replace(/\s/g, "").slice(3)}{downArrow}{enter}`);
      cy.wait(5000);
      cy.contains("Save").click();
      cy.contains("span", "Succesfully updated bot configuration!");
      // cy.wait(3000);
      // cy.get(".ant-select-selection-item").click();
      // cy.get(
      //   ".ant-select-item.ant-select-item-option.ant-pro-filed-search-select-option.ant-select-item-option-active.ant-select-item-option-selected"
      // ).click();
      // configYa.forEach((obj) => {
      //   cy.get(".ant-col.ant-col-24").children("button").click();
      //   cy.get("#title").type(obj.label);
      //   cy.get("#phone").type(`${el.phone}`);
      //   cy.get("#pattern").type(obj.text);
      //   cy.get("#reply").type(obj.reply);
      //   cy.get("#tags").type(`${el.branch.replace(/\s/g, "")}{enter}`);
      //   cy.contains("div", "Create Template").click();
      //   cy.get("#origin").type(obj.origin);
      //   cy.get("#isRoundRobin").click();
      //   cy.get(".ant-space.ant-space-horizontal.ant-space-align-center")
      //     .last()
      //     .children()
      //     .last()
      //     .click();
      // });
      // configTidak.forEach((obj) => {
      //   cy.get(".ant-col.ant-col-24").children("button").click();
      //   cy.get("#title").type(obj.label);
      //   cy.get("#phone").type(`${el.phone}`);
      //   cy.get("#pattern").type(obj.text);
      //   cy.get("#reply").type(obj.reply);
      //   cy.get("#tags").type(obj.tag);
      //   cy.contains("div", "Create Template").click();
      //   cy.get("#origin").type(obj.origin);
      //   cy.get("#isRoundRobin").click();
      //   cy.get(".ant-space.ant-space-horizontal.ant-space-align-center")
      //     .last()
      //     .children()
      //     .last()
      //     .click();
      // });
    });
  });
});
