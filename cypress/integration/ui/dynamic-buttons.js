describe('Checking dynamic buttons', () => {
    beforeEach('', () => {
        cy.visit('/elements');
        cy.get('.main-header').should('contain', 'Elements');
        cy.get('.element-list').should('have.class', 'show').contains('Dynamic Properties').click();
    });

    it('Check 1 button enable after 5 seconds', () => {
        cy.get('#enableAfter').should('be.visible').and('be.disabled');
        cy.wait(4500)
        cy.get('#enableAfter').should('be.disabled');
        cy.wait(500);
        cy.get('#enableAfter').should('be.enabled');
    });

    it('Check 2 button collored after 5 seconds', () => {
        cy.get('#colorChange').should('be.visible').and('not.have.class', 'text-danger');
        cy.wait(4500);
        cy.get('#colorChange').should('not.have.class', 'text-danger');
        cy.wait(500);
        cy.get('#colorChange').should('have.class', 'text-danger');
    });

    it('Check 3 button appears after 5 seconds', () => {
        cy.get('#visibleAfter').should('not.be.exist');
        cy.wait(4500);
        cy.get('#visibleAfter').should('not.be.exist');
        cy.wait(500);
        cy.get('#visibleAfter').should('be.exist').and('be.visible');
    });
});