describe('Add OnBoarding', () => {
  before(() => {
    cy.visit('http://localhost:8000');
    cy.get('#email').type('comp@mail.com');
    cy.get('#password').type('satusampaidelapan');
    cy.get('button').click().url().should('include', '/home');
  });
  it('Success add on boarding', () => {
    cy.get('li').children().contains('span', 'Daisi Forms').click();
  });
});
