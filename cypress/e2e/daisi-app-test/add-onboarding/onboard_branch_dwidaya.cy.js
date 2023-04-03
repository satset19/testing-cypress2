import detailAccount from "./detailAccount";

describe("Add OnBoarding", () => {
  detailAccount.map((el) => {
    xit(`Success add on boarding ${el.email.replace(
      /[^0-9]/g,
      ""
    )}DWIDAY`, () => {
      cy.visit("https://reg.daisi.app", { timeout: 100000 });
      cy.log(el.branch.slice(0, 7));
      cy.get("#email").type(`${el.email}`);
      cy.get("#password").type(`${el.password}`);
      cy.get("button").click().url().should("include", "/home");
      cy.get("span[title='Container']").click();
      cy.get('a[href*="/container/bot-config"]').click();
      cy.get(".ant-col.ant-col-24").children("button").click();
      if (el.branch.slice(0, 7) === "Dwidaya") {
        cy.get("#title").type(`Onboarding - ${el.branch.slice(8)}`);
      } else {
        cy.get("#title").type(`Onboarding - ${el.branch}`);
      }
      cy.get("#phone").type(`${el.phone}`);
      cy.get("#pattern").type(
        `Selamat datang di Dwidayatour Integrated Virtual Assistant. Kirim pesan ini untuk terhubung dengan Travel Consultant kami #${el.branch.replace(
          /\s/g,
          ""
        )}`
      );
      cy.get("#reply").type(
        `Terima kasih Anda telah menghubungi layanan Dwidayatour Chat via WhatsApp, saat ini Anda sedang dalam antrian. Mohon tunggu beberapa saat. Kini Anda dapat langsung bertransaksi dengan kartu kredit melalui direct message Instagram / WhatsApp Official kami dengan menggunakan payment link yang telah terjamin keamanannya dengan sertifikasi PCI-DSS. Sebagai informasi, seluruh chat Anda terekam oleh system jaringan terpusat Dwidayatour untuk menjamin keamanan dan privasi Anda.`
      );
      cy.get("#tags").type(`${el.branch.replace(/\s/g, "")}{enter}`);
      cy.contains("div", "Create Template").click();
      cy.get("#origin").type(`${el.branch.replace(/\s/g, "")}`);
      cy.get("#isRoundRobin").click();
      cy.get(".ant-space.ant-space-horizontal.ant-space-align-center")
        .last()
        .children()
        .last()
        .click();
      cy.wait(3000);
    });
  });
});
