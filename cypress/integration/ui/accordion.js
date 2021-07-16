describe('Check accordion', () => {
    beforeEach('', () => {
        cy.visit('/accordian');
        cy.get('.main-header').should('contain', 'Accordian');
    });

    it('Checking the What is Lorem Ipsum? ellement', () => {
        cy.get('#section1Heading').should('contain', 'What is Lorem Ipsum?').click();
        cy.get('#section1Content').parent().should('not.have.class', 'show');
        cy.get('#section1Heading').click();
        cy.get('#section1Content').parent().should('have.class', 'show');
    });
});
