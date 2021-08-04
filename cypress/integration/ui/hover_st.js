describe('Check hover effect for different elements', () => {
    beforeEach('', () => {
        cy.visit('/tool-tips');
        cy.get('.main-header').should('contain', 'Tool Tips')
    });

    it('Check hint for button after hovering over', () => {
        cy.get('#toolTipButton').trigger('mouseover').then(() => {
            cy.get('#buttonToolTip').should('contain', 'You hovered over the Button')
        });
    });

    it('Check hint for text area after hovering over', () => {
        cy.get('#toolTipTextField').trigger('mouseover').then(() => {
            cy.get('#textFieldToolTip').should('contain', 'You hovered over the text field')
        });
    });

    it.only('Check hint for text link after hovering over', () => {
        cy.get('#texToolTopContainer')
            .find('a')
            .contains('Contrary')
            .trigger('mouseover')
            .then(() => {
                cy.get('#contraryTexToolTip').should('contain', 'You hovered over the Contrary')
            });
        cy.get('#texToolTopContainer')
            .find('a')
            .contains('1.10.32')
            .trigger('mouseover')
            .then(() => {
                cy.get('#sectionToolTip').should('contain', 'You hovered over the 1.10.32')
            });
    });
});