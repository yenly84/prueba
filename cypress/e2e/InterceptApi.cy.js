//load fixed set data locate in a file(los fixtures son para cargar set de datos estaticos)
const endpoint='https://itera-qa.azurewebsites.net/UserRegister/NewUser';
const nuevosUser= {
  "FirstName":"yo2",
  "Surname": "tu",
  "E_post":"ali", 
  "Mobile": "ssss",
  "Username":"yenin",
  "Password":"Test123",
  "ConfirmPassword":"Test123"
}
const addUser= nuevosUser=>{
  cy.request('POST', endpoint, nuevosUser)
  .its('status')
  .should('eq',200)

}


describe('Api testing demo', () => {
  
 it('Add User', ()=> {

           addUser(nuevosUser) 
          cy.request('Get',endpoint)
          .its('status')
          .should('eq',200)
          
          
        })
        it('Header/content', ()=> {

         cy.request(endpoint)
         .its('headers')
         .its('content-type')
         .should('include','charset=utf-8')
         .should('include','text/html')

       })
      /*it ('esquema datos', ()=>{
        cy.request(endpoint)
        .its('body')
        .each(Object=>{
          expect(Object).to.have.all.keys('FirstName','Surname','E_post','Mobile','Username','Password','ConfirmPassword')})
      })*/
  })
