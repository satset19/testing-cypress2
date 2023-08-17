// import axios from "axios";
import container from "../daisi-app-test/TestContainer/container.json";
import account from "../daisi-app-test/add-direct-message/detailAccount";
const token =
  "6b859eac42e82073a49ea5e72c69e8b5d5fbb9e3e7fdb07762553a61f7b93417";
const option = {
  headers: {
    "Content-Type": "application/json",
    token,
  },
};

// describe("Check message OnBoarding", () => {
//   container.dwidaya.map((el) => {
//     it(`Send message to container ${el.sender}`, async () => {
//       cy.request({
//         url: "https://db.daisi.id/api/v1/wa/send",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           token,
//         },
//         body: {
//           sender: "01COMP",
//           phones: `${el.phone}`,
//           messages: [
//             {
//               text: `Test`,
//             },
//           ],
//         },
//       });
//       cy.wait(1000);
//     });
//   });
// });

// const payload = {
//   query: `query config($key: String) {
//     config(key: $key) {
//         key
//         value
//     }
// }`,
//   variables: {
//     key: "COMP:01COMP-ONBOARDINGS",
//   },
// };
// const url = "https://db.daisi.id/graphql";

describe("Check tag contact", () => {
  account.forEach((el) => {
    it(el.email, () => {
      cy.visit("https://chat.daisi.app/");
      cy.get('input[name="email"]', { timeout: 10000 }).type(el.email);
      cy.get('input[name="password"]').type(el.password);
      cy.get("form").submit();
      cy.contains("a", "Contact").click();
      cy.get('input[type="text"]').type("628111158682", { force: true });
      cy.contains("span", "Search").click({ force: true });
      // cy.wait(2000);
      cy.contains("span", `${el.branch.replace(/\s/g, "")}`, { timeout: 2000 });
    });
  });
});
