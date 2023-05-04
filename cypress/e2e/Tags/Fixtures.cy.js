//load fixed set data locate in a file(los fixtures son para cargar set de datos estaticos)


describe('fixtures demo(sanity)',{tags:'@sanityTag'}, () => {
  beforeEach( function() {
    cy.visit('https://itera-qa.azurewebsites.net/Login/');

   cy.fixture('iteraCredentials')
   .then(credentials => {
       this.credentials=credentials;
    })
  })
  it('login', function() {
    cy.get("#Username").type(this.credentials.user);
    cy.get("#Password").type(this.credentials.password);
    cy.get('[name="login"]').click();
    //cy.title().should('eq','Dashboard');
   cy.get(".container.body-content").should('contain.text','Dashboard');
  })
  it('incorrect user', function() {
    cy.get("#User").type(this.credentials.userInc);
    cy.get("#Password").type(this.credentials.password);
    cy.get('[name="login"]').click();
   cy.get(".alert-danger").should('contain.text','Wrong username or password');
  })

})