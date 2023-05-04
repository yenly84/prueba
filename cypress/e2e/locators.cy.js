
let firstname="yeni"; //asi creo la variable y le doy un valor
let surname="per";
let email="yen@gmail.ex";
let mobile="634213221";
let user="yeni";
let password="Test123";

describe('locators in cypress ', () => {
  beforeEach( () => {
    cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')
  })

 /*it("Get method", () => {

  cy.get("#FirstName").type("Rafa");
  cy.get("#Surname").type("Rod");
  cy.get("#E_post").type("Rod@gmail.com");
  cy.get("#Mobile").type("636211719");
  cy.get("#Username").type("Rafa");
  cy.get("#Password").type("Test123");
  cy.get("#ConfirmPassword").type("Test123");

  cy.get("#submit").click();
  

 });*/
 
 
 
 it("EQ first last method", ()=> {

  cy.get("input").eq(2).type(firstname);
  cy.get("input").eq(3).type(surname);
  cy.get("input").eq(4).type(email);
  cy.get("input").eq(5).type(mobile);
  cy.get("input").eq(6).type(user);
  cy.get("input").eq(7).type(password);
  cy.get("input").eq(8).type(password);

  cy.get("input").last().click();

 });
 
 
})