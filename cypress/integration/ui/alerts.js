describe('Check allerts', () => {
    beforeEach('', () => {
        cy.visit('/alerts');
        cy.get('.main-header').should('contain', 'Alerts');
    });

    it('Check alert after clicking 1 button', () => {
        cy.get('#javascriptAlertsWrapper').contains('Click Button to see alert').find('button').click();
    });

    it.only('Check alert after clicking 2 button', () => {
        cy.get('#javascriptAlertsWrapper').find('div').contains('On button click, alert will appear after 5 seconds').parentsUntil('#javascriptAlertsWrapper').find('button').click()
        cy.wait(5000);
 /*        const stub = cy.stub()

        cy.on('window:alert', stub)

        cy.get('button')
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('hi')
                expect(stub.getCall(1)).to.be.calledWith('there')
                expect(stub.getCall(2)).to.be.calledWith('friend')
            }) */
        cy.get('window:alert').should('contain', '1')

    });

    it('Check alert after clicking 3 button', () => {
        cy.get('.row').contains('On button click, confirm box will appear').find('button').click();
    });

    it('Check alert after clicking 4 button', () => {
        cy.get('.row').contains('On button click, prompt box will appear').find('button').click();
    });
});