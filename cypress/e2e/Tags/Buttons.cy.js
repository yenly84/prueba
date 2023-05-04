
describe('Button Action(regression)',{tags:'@regressionTag'}, function() {
  beforeEach( function() {
    cy.visit('https://demoqa.com/buttons');
  })
  it('Double Click',function(){
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').should('have.text','You have done a double click')

  })

  it('Right click',function(){
    cy.get('#rightClickBtn').rightclick()
    cy.get('#rightClickMessage').should('have.text','You have done a right click')
  })
   
})