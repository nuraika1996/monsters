describe('as a user I should be able to login to the hr app', () => {

    it('should practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('Admin').click()
    
       
        // cy.get("[class='oxd-icon bi-plus oxd-button-icon']").click()
        // cy.get('.oxd-select-text-input')
  
        //      .eq(0)
        //      .click()
        //      .get('.oxd-select-option')
        //      .contains('ESS')
        //      .click()
        //      cy.get('.oxd-select-text-input')
        //      .eq(1)
        //      .click()
        //      .get('.oxd-select-option')
        //      .contains('Enabled')
        //      .click()
            
            
        //     cy.get('[placeholder="Type for hints..."]').type('Virat Kohli')
        //     cy.get('[role="listbox"]').contains('Virat Kohli').click()
        //     cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('nuraika')
        //     cy.get('[class="oxd-input oxd-input--active"]').eq(2).type('nuraika123')
        //     cy.get('[class="oxd-input oxd-input--active"]').eq(2).type('nuraika123')
        //     cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
       

cy.get('[type="submit"]').click()
cy.contains('PIM').click()
cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('[placeholder="First Name"]').type('Nurai')
        cy.get('[placeholder="Last Name"]').type('Kylychbekova')
        cy.get('[class="oxd-input oxd-input--active"]')
        .eq(1)
        .click()
        cy.get('[type="submit"]').click()

        //     expect('PIM').to.equal(x.text())


        // // })
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        // .invoke('text')
        // .should('equal','PIM')
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        //     .invoke('text')
        //     .as('HeaderPIM')

        // cy.contains('Employee List')
        //     .invoke('text')
        //     .as('Elist')

        // // cy.get('@HeaderPIM').should('equal', 'PIM')
        // cy.get('@Elist').should('equal', 'Employee List')

       

        // cy.contains('Leave').click()
        // cy.get('[class="oxd-main-menu"] li').eq(0).click() 


        /// <reference types="cypress" />

// describe('practice dropdown', () => {
//     it('should select dropdown', () => {

//         //cy.visit('https://artoftesting.com/samplesiteforselenium')

//         //cy.get('#testingDropdown').select('Performance')

//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//         cy.get('[name="username"]').type('Admin')

//         cy.get('[name="password"]').type('admin123')

//         cy.get('[type="submit"]').click()

//         cy.contains('Admin').click()

//         cy.contains('[aria-label="Topbar Menu"] ul li', 'Job')
//             .click()
//             .contains('Job Title')
//             .click()

            


    });
});


