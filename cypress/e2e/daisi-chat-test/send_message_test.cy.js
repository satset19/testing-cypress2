import axios from 'axios';
import container from './Test Container/container.json';
const token =
  '6b859eac42e82073a49ea5e72c69e8b5d5fbb9e3e7fdb07762553a61f7b93417';
const option = {
  headers: {
    'Content-Type': 'application/json',
    token,
  },
};
const payload = {
  query: `query config($key: String) { 
    config(key: $key) {  
        key
        value
    }   
}`,
  variables: {
    key: 'COMP:01COMP-ONBOARDINGS',
  },
};
const url = 'https://db.daisi.id/graphql';

describe('Check message OnBoarding', () => {
  it('Send message from onBoarding', async () => {
    const { data } = await axios.post(url, payload, option);
    let message = data.data.config.value;
    cy.visit('reg.daisi.app');
    cy.get('#email').type('socialku69@gmail.com');
    cy.get('#password').type('Akundemo1!');
    cy.get('button').click().url().should('include', '/home');
    // cy.get('.ant-pro-menu-submenu.ant-design-pro-layout-lo3kc4').click();
    // cy.get('a[href*="/container/bot-config"]').click();
    console.log(container);
    cy.request({
      url: 'https://db.daisi.id/api/v1/wa/send',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      body: {
        sender: '01COMP',
        phones: '6285816975740',
        messages: [
          {
            text: `!ping`,
          },
        ],
      },
    });
  });
});
