describe('Check accordions, ability to hide and unhide', () => {
    beforeEach('', () => {
        cy.visit('/accordian');
        cy.get('.main-header').should('contain', 'Accordian');
    });

    it('Check first accordion unhided by default and ability to hide it', () => {
        cy.get('#section1Content').parent().should('have.class', 'show');
        cy.get('#section1Heading').should('contain', 'What is Lorem Ipsum?').click();
        cy.get('#section1Content').parent().should('not.have.class', 'show');
    });

    it('Check second accordion hided by default and ability to unhide it', () => {
        cy.get('#section2Content').parent().should('not.have.class', 'show');
        cy.get('#section2Heading').should('contain', 'Where does it come from?').click();
        cy.get('#section2Content').parent().should('have.class', 'show');
    });

    it('Check third accordion hided by default and ability to unhide it', () => {
        cy.get('#section3Content').parent().should('not.have.class', 'show');
        cy.get('#section3Heading').should('contain', 'Why do we use it?').click();
        cy.get('#section3Content').parent().should('have.class', 'show');
    });
});