//load fixed set data locate in a file(los fixtures son para cargar set de datos estaticos)

const tests= require('../fixtures/iteraUser.json')
describe('fixtures ', () => {
  beforeEach( function() {
    cy.visit('https://itera-qa.azurewebsites.net/Login/'); 
    
  })

   tests.forEach(test => {

    it(test.name, function() {
      cy.get("#Username").type(test.user);
      cy.get("#Password").type(test.password);
      cy.get('[name="login"]').click();
      if(test.name==="userCorrect"){
        cy.get(".container.body-content").should('contain.text',test.expected);
      } 
        else{   
          cy.get(".alert-danger").should('contain.text',test.expected);
      }
     })
    })
  })
