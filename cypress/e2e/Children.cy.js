//load fixed set data locate in a file(los fixtures son para cargar set de datos estaticos)
import homeIteraPage from "./homeIteraPage";

describe('Intercept demo', () => {
  beforeEach( ()=> {
    cy.visit('https://itera-qa.azurewebsites.net/Login/'); 
  })

    it('should login page Dashboard page', ()=> {
      homeIteraPage.typeUsername('yeni')
      homeIteraPage.typePasword('Test123')
      homeIteraPage.clicklogin()
   
     })
 

  it('Initial validation', function() {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('.card-body').contains('Gender')
    cy.get('.card-body').children('.form-check')
    cy.get('.form-check').should('have.length',10)
    cy.get('.form-check').eq(0).contains('Female')

    cy.get('#female').check()//seleccionar el radiobuton
    cy.get('#female').should('be.checked').and('have.value', 'option1')//verifica q el valor=option1 es el q está seleccionado
    cy.get('#male').check('option2')//seleccionar el radiobuton
    
  })
  
})