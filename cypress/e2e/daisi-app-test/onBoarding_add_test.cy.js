describe('Add OnBoarding', () => {
  before(() => {
    cy.visit('http://localhost:3000');
    cy.get('#email').type('socialku69@gmail.com');
    cy.get('#password').type('Akundemo1!');
    cy.get('button').click().url().should('include', '/home');
  });
  it('Success add on boarding', async () => {
    cy.get('.ant-pro-menu-submenu.ant-design-pro-layout-lo3kc4').click();
    cy.get('a[href*="/container/bot-config"]').click();
    cy.get('.ant-col.ant-col-24').children('button').click();
    cy.get('#title').type('Diskon 100%');
    cy.get('#phone').type('6281389318328');
    cy.get('#pattern').type('Halo min, mau diskon');
    cy.get('#reply').type(
      'Selamat anda mendapat kesempatan potongan harga 100%',
    );
    cy.get('#tags').type('diskon{enter}potongan harga{enter}');
    cy.get('.ant-form.ant-form-vertical').click();
    cy.get('#origin').type('Tambun');
    cy.get('#isRoundRobin').click();
    cy.get('.ant-space.ant-space-horizontal.ant-space-align-center')
      .last()
      .children()
      .last()
      .click();
    cy.get('canvas', { timeout: 20000 });
  });
});
