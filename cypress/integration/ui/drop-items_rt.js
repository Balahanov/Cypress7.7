describe('Check ability to move items', () => {
    beforeEach('', () => {
        cy.visit('/droppable');
        cy.get('.main-header').should('contain', 'Droppable');
    });

    it("Check simple D'n'D", () => {
        cy.get('#draggable')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { pageX: 1115, pageY: 369 })
            .trigger('mouseup');
        cy.get('#droppable')
            .should('have.class', 'ui-state-highlight')
            .and('contain', 'Dropped!');
    });

    it("Check acceptable D'n'D", () => {
        cy.get('#droppableExample-tab-accept').click();
        cy.get('#acceptable')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { pageX: 1115, pageY: 369 })
            .trigger('mouseup');
        //Solution from previous case is not working, its magic
        cy.get('p')
            .should('contain', 'Dropped!')
            .parent()
            .should('have.class', 'ui-state-highlight');
    });

    it("Check is not acceptable D'n'D", () => {
        cy.get('#droppableExample-tab-accept').click();
        cy.get('#notAcceptable')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { pageX: 1115, pageY: 369 })
            .trigger('mouseup');
        //Solution from previous case is not working, its magic
        cy.get('p')
            .should('contain', 'Drop here')
            .parent()
            .should('not.have.class', 'ui-state-highlight');
    });
});