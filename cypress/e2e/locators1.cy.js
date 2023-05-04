
let username="yen"; //asi creo la variable y le doy un valor
let password="Test123";

describe('locators in cypress ', () => {
/*  beforeEach( () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation/')
  })*/

 /*it("Get method", () => { //funciona este metodo

  cy.get("#name.form-control").type("Juan");
  cy.get("#phone.form-control").type("636211719");
  cy.get("#email.form-control").type("ex@gmail.com");
  cy.get("#password.form-control").type("test1234");
  cy.get("#address.form-control").type("isabelita 16");
  cy.get(".btn-primary").click();  

 });
 
 after(()=> {
  cy.visit("https://itera-qa.azurewebsites.net/home");

 })*/
  beforeEach( () => {
    cy.visit("https://itera-qa.azurewebsites.net/Login/")
    })
 
 it("EQ first last method", ()=> {

  cy.get("input").eq(1).type(username);
  cy.get("input").eq(2).type(password);
  cy.get("input").eq(3).click();

 });
})