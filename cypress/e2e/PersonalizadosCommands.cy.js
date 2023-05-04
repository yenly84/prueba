
describe('commands exemple', function() {
  beforeEach( function() {
    cy.visit('https://itera-qa.azurewebsites.net/Login/');
  })
  it('test',function(){
    cy.log('test', 'es una prueba');
  })

  it('login',function(){
   cy.typeLogin('yeni','Test123');
   cy.get(".container.body-content").should('contain.text','Dashboard');
   cy.logout();
   cy.url().should('eq','https://itera-qa.azurewebsites.net/Login');
  })
  it('Failed login',function(){
    cy.typeLogin('yeni89','Test123');
    cy.get(".alert-danger").should('contain.text','Wrong username or password');
   
   })
 
})