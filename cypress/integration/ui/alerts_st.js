function clickButton(descriptionOfTheButton) {
    cy.get('#javascriptAlertsWrapper')
        .find('div')
        .contains(descriptionOfTheButton)
        .parentsUntil('#javascriptAlertsWrapper')
        .find('button')
        .click();
};

describe('Check allerts', () => {
    beforeEach('', () => {
        cy.visit('/alerts');
        cy.get('.main-header').should('contain', 'Alerts');
    });

    it('Check alert after clicking 1 button', () => {
        const desc = 'Click Button to see alert';
        clickButton(desc);
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`You clicked a button`);
        });
    });

    it('Check alert after clicking 2 button', () => {
        const desc = 'On button click, alert will appear after 5 seconds';
        clickButton(desc);
        cy.wait(5000);
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`This alert appeared after 5 seconds`);
        });
    });

    it('Check alert after clicking 3 button with confirming', () => {
        const desc = 'On button click, confirm box will appear';
        clickButton(desc);
        cy.on('window:confirm', str => {
            expect(str).to.eq(`Do you confirm action?`);
        });
        cy.get('#confirmResult').should('contain', 'You selected Ok');
    });

    it('Check alert after clicking 3 button with canceling', () => {
        const desc = 'On button click, confirm box will appear';
        clickButton(desc);
        cy.on('window:confirm', str => {
            expect(str).to.eq(`Do you confirm action?`);
            return false;
        });
        cy.get('#confirmResult').should('contain', 'You selected Cancel');
    });

    it('Check alert after clicking 4 button', () => {
        const desc = 'On button click, prompt box will appear';
        const prompt = 'something';
        cy.window().then(win => cy.stub(win, 'prompt').returns(prompt));
        clickButton(desc);
        cy.get('#promptResult').should('contain', 'You entered ' + prompt);
    });
});