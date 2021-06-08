// Valid Login
Cypress.Commands.add('login', (user) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/Account/v1/Authorized`,
        body: {
            "userName": user.login,
            "password": user.password
          },
    }).its('status').should('equal', 200);
});