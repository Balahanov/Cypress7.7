const firstName = 'first name';
const lastName = 'last name';
const phone = '123456789';
const checkbox = 'Male';
const email = 'test@test.test';
const address = 'Address';

function popupComparing() {
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
    cy.get('tr').eq(1).then((arr) => {
        cy.get(arr).find('td').eq(0).should('contain', 'Student Name')
        cy.get(arr).find('td').eq(1).should('contain', firstName + ' ' + lastName)
    });
    cy.get('tr').eq(3).then((arr) => {
        cy.get(arr).find('td').eq(0).should('contain', 'Gender')
        cy.get(arr).find('td').eq(1).should('contain', checkbox)
    });
    cy.get('tr').eq(4).then((arr) => {
        cy.get(arr).find('td').eq(0).should('contain', 'Mobile')
        cy.get(arr).find('td').eq(1).should('contain', phone)
    });
};
function fillRequiredFields() {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#genterWrapper').find('label').contains(checkbox).click();
    cy.get('#userNumber-wrapper').find('input').type(phone);
};

describe('Checking submiting form', () => {

    beforeEach('', () => {
        cy.visit('/automation-practice-form');
        cy.get('.main-header').should('contain', 'Practice Form');
        cy.get('#userForm').should('be.visible');
    });

    it('Fill all required fields and submit', () => {
        fillRequiredFields()
        cy.get('#submit').click();
        popupComparing();
    });

    it('Fill all fields and submit', () => {
        fillRequiredFields()
        cy.get('#userEmail').type(email);
        cy.get('#subjectsWrapper').find('input').type('Some text');
        cy.get('#hobbiesWrapper').contains('Sport').click();
        cy.get('#currentAddress').type(address);
        cy.get('#stateCity-wrapper').contains('Select State').click();
        cy.get('#react-select-3-option-2').should('contain', 'Haryana').click();
        cy.get('#submit').click();
        popupComparing()
        cy.get('tr').eq(2).then((arr) => {
            cy.get(arr).find('td').eq(0).should('contain', 'Student Email')
            cy.get(arr).find('td').eq(1).should('contain', email)
        });
        cy.get('tr').eq(7).then((arr) => {
            cy.get(arr).find('td').eq(0).should('contain', 'Hobbies')
            cy.get(arr).find('td').eq(1).should('contain', 'Sport')
        });
        cy.get('tr').eq(9).then((arr) => {
            cy.get(arr).find('td').eq(0).should('contain', 'Address')
            cy.get(arr).find('td').eq(1).should('contain', address)
        });
    });

    it('Checking submit empty form', () => {
        cy.get('#submit').click();
        cy.get('#userForm').should('have.class', 'was-validated');
        cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.custom-control-label').contains('Male').should('have.css', 'color', 'rgb(220, 53, 69)');
        cy.get('.custom-control-label').contains('Female').should('have.css', 'color', 'rgb(220, 53, 69)');
        cy.get('.custom-control-label').contains('Other').should('have.css', 'color', 'rgb(220, 53, 69)');
    });
});