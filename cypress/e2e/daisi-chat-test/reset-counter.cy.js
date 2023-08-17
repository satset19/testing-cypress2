const token = '46ae365fa134bf3e1f140bf146c32346c0266996be2bfb2929a0a0c1af642b2e64bf'
const url = 'https://db.daisi.id/api/v1/reset-counter';
const sender = ['27DWIDAY',
    '49DWIDAY',
    '35DWIDAY',
    '33DWIDAY',
    '51DWIDAY',
    '09DWIDAY',
    '30DWIDAY',
    '32DWIDAY',
    '36DWIDAY',
    '40DWIDAY',
    '41DWIDAY',
    '37DWIDAY',
    '50DWIDAY',
    '08DWIDAY',
    '13DWIDAY',
    '44DWIDAY',
    '17DWIDAY',
    '43DWIDAY',
    '15DWIDAY']

describe('Reset Counter', () => {
    sender.forEach(el => {
        it('Send message from onBoarding' + el, async () => {
          cy.request({
            url: url,
            method: 'POST',
            headers: {
              token,
            },
            body: {
              'sender': el
            },
          });
        });
    })

});
