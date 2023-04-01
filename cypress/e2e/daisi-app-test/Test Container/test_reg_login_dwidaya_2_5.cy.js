import account from './account';

describe('Chehck Login', () => {
  beforeEach(() => {
    cy.visit('http://reg.daisi.app');
  });
  account.forEach((el, index) => {
    it(`Success Login Dwidaya Admin ${el.email.replace(/[^0-9]/g, '')}`, () => {
      cy.wait(2000);
      cy.get('#email').type(el.email);
      cy.get('#password').type(el.password);
      cy.get('button').click().url().should('include', '/home');
      cy.wait(2000);
      cy.get('.ant-card.ant-card-bordered.ant-card-hoverable', {
        timeout: 180000,
      });
      cy.contains('h5', 'Status');
      cy.get('.ant-space-item').last().realHover();
      cy.contains('li', 'Logout', { timeout: 10000 }).click();
      cy.contains('span', 'Succesfully logging out!', { timeout: 300000 });
    });
  });
});
