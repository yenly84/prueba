//https://docs.cypress.io/api/cypress-api/dom#Syntax
//Cypress.dom method()
describe('cypress dom demo', ()=>{
    it('Accordion test',()=>{
       cy.visit('https://demoqa.com/accordian')
       cy.get('.collapse').eq(6).then($element => {
     // cy.log('State of the collapse as soon as i load the website: ${Cypress.dom.isVisible($element)}')
      cy.log('State of the collapse:', Cypress.dom.isVisible($element))
    })
       cy.get('#section1Heading').click()
       cy.get('.collapse').eq(6).then($element => {
        // cy.log('State of the collapse as soon as i load the website: ${Cypress.dom.isVisible($element)}')
         cy.log('State of the collapse as click in card:', Cypress.dom.isVisible($element))
       })
    })
  
})