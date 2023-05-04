//https://docs.cypress.io/api/cypress-api/browser
describe('cypress browser demo', ()=>{
    it('Browser properties',()=>{
       // cy.log(Cypress.browser)
       cy.visit('https://www.whatismybrowser.com/es/')
       if(Cypress.browser.name==='firefox'){
        cy.get('.string-major >a').should('have.text','Firefox 112 on Windows 10')
       }else if(Cypress.browser.name==='chrome'){
        cy.get('.string-major >a').should('have.text','Chrome 111 on Windows 10')

       }
    })
  
})