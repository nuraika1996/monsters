
describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('Admin').click()

        cy.get('.oxd-table-cell.oxd-padding-cell div div label input ').eq(0).check({ force: true })

        cy.get('.oxd-table-cell.oxd-padding-cell div div label input ').eq(0).uncheck({ force: true })
    });
});