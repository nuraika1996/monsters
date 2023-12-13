/// <reference types="cypress" />


describe('practive tables', () => {
    it('should verify the new data ', () => {
        cy.visit('https://tablepress.org/demo/')

        cy.get('#tablepress-demo td')
        .contains('td','Barry')
        .should('have.text', 'Barry')

        // cy.get('#tablepress-demo td').first().should('have.text', 'Gloria')

        // cy.get('#tablepress-demo td').last().should('have.text', '$20')


})
})