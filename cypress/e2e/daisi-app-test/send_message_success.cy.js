describe('template spec', () => {
  it('Check message chat daisi', () => {
    cy.visit('http://localhost:3000/api/auth/signin');
    cy.get('#input-email-for-credentials-provider').type('comp@mail.com');
    cy.get('#input-password-for-credentials-provider').type(
      'satusampaidelapan',
    );
    cy.get('button').click().url().should('include', '/');
  });
});
