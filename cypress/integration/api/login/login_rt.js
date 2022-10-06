function request(login, password) {
    cy.request({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/Account/v1/Authorized`,
        body: {
            "userName": login,
            "password": password
        },
        failOnStatusCode: false
    }).its('status').should('equal', 404);
};

function brokenReq(obj) {
    cy.request({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/Account/v1/Authorized`,
        body: obj,
        failOnStatusCode: false
    }).its('status').should('equal', 400);
};

describe('Test login API', () => {
    beforeEach('', () => {
        cy.fixture("user").as('user');
    });
    it('Checking API login', () => {
        cy.get('@user').then((user) => {
            cy.login(user.user1)
        });
    });

    it('Checking API login with wrong login and password', () => {
        request('wrong_login', 'wrong_password');

        cy.get('@user').then((user) => {
            request(user.user1.login, 'wrong_password');
            request('wrong_login', user.user1.password);
        });
    });

    it('Checking API login with broken body', () => {
        cy.get('@user').then((user) => {
            brokenReq({
                "userName": user.user1.login
            });
            brokenReq({
                "password": user.user1.password
            });
            brokenReq({});
        });
    });
});