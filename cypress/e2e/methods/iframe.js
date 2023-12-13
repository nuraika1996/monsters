/// <reference types="cypress" />


describe('', () => {
    it('', () => {



cy.visit('https://nxtgenaiacademy.com/iframe/')
cy.get('[src="https://nxtgenaiacademy.com/demo-site/"]').then((iframe) => {

   const iframeDocument = iframe.contents().find('[name="vfb-5"]')
    
cy.wrap(iframeDocument).clear().type('Nurai')
        })

    });
});
