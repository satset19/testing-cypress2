import account from './account';

describe('Check login page', () => {
  beforeEach(() => {
    cy.visit('https://chat.daisi.app');
  });
  account.forEach((el) => {
    it(`Login Chat Dwidaya ${el.email.replace(/[^0-9]/g, '')}`, () => {
      cy.get('#input-email-for-credentials-provider').type(el.email);
      cy.get('#input-password-for-credentials-provider').type(el.password);
      cy.get('button').click().url().should('include', '/');
      cy.contains('.text-lg', 'Connected', {timeout: 5000});
      // cy.get('.bo1
      cy.get('#headlessui-menu-button-2').click();
      cy.contains('button', 'Logout').click();
    });
  });
});
