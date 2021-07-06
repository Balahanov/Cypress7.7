describe('Checking slider value', () => {
    beforeEach('', () => {
        cy.visit('/slider');
        cy.get('.main-header').should('contain', 'Slider');
    });

    it('Checking that value changed after mooving slider', () => {
        cy.get('.range-slider__tooltip__label').should('contain', 25);
         cy.get('.range-slider').click('right').then(() => {
            cy.get('.range-slider').type('{rightarrow}')
            cy.get('.range-slider__tooltip__label').should('contain', 30);
        }); 
        
    });
});