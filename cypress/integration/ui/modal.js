describe('Checking modal dialogs', () => {
    beforeEach('', () => {
        cy.visit('/modal-dialogs');
        cy.get('.main-header').should('contain', 'Modal Dialogs');
    });

    it('Check ability to open Small modal window', () => {
        cy.get('#showSmallModal').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#example-modal-sizes-title-sm').should('contain', 'Small Modal');
        cy.get('.modal-body').should('contain', 'This is a small modal. It has very less content');
        cy.get('#closeSmallModal').click().then(() => {
            cy.get('.modal-content').should('not.exist');
        });
    });

    it('Check ability to open Large modal window', () => {
        cy.get('#showLargeModal').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Large Modal');
        cy.get('.modal-body').should('contain', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        cy.get('#closeLargeModal').click().then(() => {
            cy.get('.modal-content').should('not.exist');
        });
    });
});