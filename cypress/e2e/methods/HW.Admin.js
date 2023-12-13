
describe('practicing Admin', () => {
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
        cy.contains('Admin').click()

       
             cy.get("[class='oxd-icon bi-plus oxd-button-icon']").click()
         cy.get('.oxd-select-text-input')

             .eq(0)
             .click()
             .get('.oxd-select-option')
             .contains('ESS')
             .click()
      
             cy.get('.oxd-select-text-input')
             .eq(1)
             .click()
             .get('.oxd-select-option')
             .contains('Enabled')
             .click()
    
        cy.get('[placeholder="Type for hints..."]').type('Virat Kohli')
       
        cy.get('[role="listbox"]').contains('Virat Kohli').click()
            cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('nuraika123')
            cy.get('[class="oxd-input oxd-input--active"]').eq(2).type('nuraika123')
            cy.get('[class="oxd-input oxd-input--active"]').eq(2).type('nuraika123')
           
         cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
      

            cy.get('[class="orangehrm-container"]')
       .contains('nuraika123')
            .should('have.text', 'nuraika123')
 
  
      })           


})



        
    
