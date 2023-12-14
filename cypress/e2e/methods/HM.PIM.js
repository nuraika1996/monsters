
describe('practicing PIM', () => {
    before(() => {
        cy.fixture('users').then((data) => {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        cy.login(data.username, data.password)
    });
    it('Test 1', () => {
        cy.visit('/')
        cy.contains('PIM').click()
        
cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('[placeholder="First Name"]').type('Nurai')
        cy.get('[placeholder="Last Name"]').type('Kylychbekova')
        cy.get('[class="oxd-input oxd-input--active"]')
        .eq(1)
        .click()
        cy.get('[type="submit"]').click()
        cy.get('.oxd-topbar-body-nav-tab-item').eq(1).click()
        
         cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').eq(0).type('Nurai')
         cy.get('[type="submit"]').click()
       
        cy.contains('Nurai ')
         .should('have.text','Nurai ')
     
    })
})