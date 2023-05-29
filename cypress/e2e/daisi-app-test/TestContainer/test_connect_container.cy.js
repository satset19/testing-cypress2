import account from "./account";
import container from "./container.json";
const token =
  "6b859eac42e82073a49ea5e72c69e8b5d5fbb9e3e7fdb07762553a61f7b93417";

describe(`Send '!ping' to each Container`, () => {
  container.dwidaya.forEach((element) => {
    it(`${element.sender} !ping`, () => {
      cy.request({
        url: "https://db.daisi.id/api/v1/wa/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: {
          sender: "01COMP",
          phones: `${element.phone}`,
          messages: [
            {
              text: `!ping`,
            },
          ],
        },
      });
    });
  });
});
describe(`Send '!ping' to each Container`, () => {
  container.ies.forEach((element) => {
    it(`${element.sender} !ping`, () => {
      cy.request({
        url: "https://db.daisi.id/api/v1/wa/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: {
          sender: "01COMP",
          phones: `${element.phone}`,
          messages: [
            {
              text: `!ping`,
            },
          ],
        },
      });
    });
  });
});
describe(`Send '!ping' to each Container`, () => {
  container.galileo.forEach((element) => {
    it(`${element.sender} !ping`, () => {
      cy.request({
        url: "https://db.daisi.id/api/v1/wa/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: {
          sender: "01COMP",
          phones: `${element.phone}`,
          messages: [
            {
              text: `!ping`,
            },
          ],
        },
      });
    });
  });
});
describe(`Send '!ping' to each Container`, () => {
  container.Allsaints.forEach((element) => {
    it(`${element.sender} !ping`, () => {
      cy.request({
        url: "https://db.daisi.id/api/v1/wa/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: {
          sender: "01COMP",
          phones: `${element.phone}`,
          messages: [
            {
              text: `!ping`,
            },
          ],
        },
      });
    });
  });
});
describe(`Send '!ping' to each Container`, () => {
  container.AviaTour.forEach((element) => {
    it(`${element.sender} !ping`, () => {
      cy.request({
        url: "https://db.daisi.id/api/v1/wa/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: {
          sender: "01COMP",
          phones: `${element.phone}`,
          messages: [
            {
              text: `!ping`,
            },
          ],
        },
      });
    });
  });
});
describe(`Send '!ping' to each Container`, () => {
  container.Smailing.forEach((element) => {
    it(`${element.sender} !ping`, () => {
      cy.request({
        url: "https://db.daisi.id/api/v1/wa/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: {
          sender: "01COMP",
          phones: `${element.phone}`,
          messages: [
            {
              text: `!ping`,
            },
          ],
        },
      });
    });
  });
});

describe("Check Container Connect", () => {
  account.forEach((el) => {
    it(`${el.email.replace(/[^0-9]/g, "")}DWIDAY`, () => {
      cy.visit("https://chat.daisi.app");
      cy.get("#input-email-for-credentials-provider").type(el.email);
      cy.get("#input-password-for-credentials-provider").type(el.password);
      cy.get("button").click().url().should("include", "/");
      if (cy.contains(".text-lg", "Connected", { timeout: 60000 }))
        it("connect");
      else it("disconnect");
      cy.get(
        ".box.cursor-pointer.relative.flex.justify-between.items-center.px-3.py-3.mt-2.z-0"
      )
        .first()
        .click();
      cy.wait(3000);
      cy.get(
        ".px-1.py-1.mb-1.self-start.text-gray-900.break-words.whitespace-pre-wrap",
        { timeout: 3000 }
      ).should("contain", "pong");
      cy.wait(2000);
    });
  });
});
