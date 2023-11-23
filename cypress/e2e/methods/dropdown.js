///<reference types="cypress" />
describe('practice dropdown', () => {
    it('should select dropdown', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        cy.get('#testingDropdown').select('Performance')
    });
});