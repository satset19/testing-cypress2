// describe('Check Register', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000').url().should('include', '/login');
//     cy.get('.ant-col')
//       .should('contain.text', 'Click here to register!')
//       .click({ multiple: true })
//       .url()
//       .should('include', '/register');
//   });
//   it('All input empty', () => {
//     cy.get('Button').click();
//     cy.get('.ant-form-item-explain-error')
//       .should('include.text', 'Please input your E-mail!')
//       .should('include.text', 'Please input your password!')
//       .should('include.text', 'Please confirm your password!')
//       .should('include.text', 'Please input your name/company!')
//       .should('include.text', 'Please input your cluster name!')
//       .should('include.text', 'Should accept agreement');
//   });
// });
