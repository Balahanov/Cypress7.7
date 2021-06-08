describe('Login app', () => {
    beforeEach('', () => {
        cy.fixture("user").as('user');
        cy.visit('/books')
    });

    it('Checking login app', () => {
        cy.get('#login').should('contain', 'Login').click()
    });
});