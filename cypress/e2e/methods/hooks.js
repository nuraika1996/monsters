describe('practicing hooks', () => {

    beforeEach(() => {
        cy.login('Admin', 'admin123')
    
    });


    it('Test 1', () => {


        cy.contains("Admin").click()
    });

    it('Test 2', () => {


        cy.contains("PIM").click()
    });
});


// describe('practicing hooks', () => {

//     before(() => {
//         cy.fixture('users').then((data) => {
//             globalThis.data = data
//         })
//     })

//     beforeEach(() => {
//         cy.login(data.username, data.password)
//     });


//     it('Test 1', () => {


//         cy.contains("Admin").click()
//     });

//     it('Test 2', () => {


//         cy.contains("PIM").click()
//     });
// });







