describe ('Asertion demo',()=>{
  beforeEach(()=>{
    cy.visit('https://demoqa.com/radio-button')
  })
  it('TDD assertions', ()=>{
    cy.log('length Check')
    cy.get('input[type="radio"]').should('have.length',3)
    cy.log('class check')
    cy.get('input[type="radio"]').eq(2).should('have.class','disabled')
    cy.log('exist check')
    cy.get(".mt-3").should('not.exist')
    cy.log('text check')
    cy.get('#yesRadio').click({force:true})
    cy.get(".mt-3").should('exist')
    .and('have.text','You have selected Yes')
    .and('include.text','Yes')
    .and('not.contain','No')
    cy.get('.text-success').should('have.css','color','rgb(40, 167, 69)')
  })
  it('BDD assertions',()=>{
    cy.log('class & length')
    cy.get('input[type="radio"]').should($inputs=>{
      expect($inputs).to.have.lengthOf(3)
      expect($inputs[2]).to.have.class('disabled')
    })
    cy.log('text check')
    cy.get('input[type="radio"]').eq(1).click({force:true})
    cy.get(".mt-3").should($elements=>{
      expect($elements).to.have.text('You have selected Impressive')
      expect($elements).to.contain.text('Impressive')
    })

  })
})