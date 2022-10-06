function login(username, password) {
    cy.get('#login').should('contain', 'Login').click();
    cy.get('.main-header').should('contain', 'Login');
    cy.get('#userForm').should('be.visible');
    cy.get('#userName').should('be.visible').type(username);
    cy.get('#password').should('be.visible').type(password);
    cy.get('#login').should('contain', 'Login').click();
};

describe('Login app', () => {
    let username;
    let password;
    beforeEach('', () => {
        cy.fixture("user").as('user').then((user) => {
            username = user.user1.login;
            password = user.user1.password;
        });
        cy.visit('/books');
    });

    it('Checking login app', () => {
        login(username, password);
        cy.get('#userName-value').should('contain', username);
    });

    it('Checking login with invalid data', () => {
        login('test', 'test1');
        cy.get('#output').should('be.visible').and('contain', 'Invalid username or password!');
    });

    it('Checking login with invalid login', () => {
        login('test', password);
        cy.get('#output').should('be.visible').and('contain', 'Invalid username or password!');
    });

    it('Checking login with invalid password', () => {
        login(username, 'test1');
        cy.get('#output').should('be.visible').and('contain', 'Invalid username or password!');
    });

    it('Checking login with empty fields', () => {
        cy.get('#login').should('contain', 'Login').click();
        cy.get('.main-header').should('contain', 'Login');
        cy.get('#userForm').should('be.visible');
        cy.get('#login').should('contain', 'Login').click();
        cy.get('#userName').should('have.class', 'is-invalid');
        cy.get('#password').should('have.class', 'is-invalid');
    });
});