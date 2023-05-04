let username="yen1" //asi creo la variable y le doy un valor
let password="test123"

describe('location demo', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/');
  });


 it ("should have title DEMOQA", () => {
    cy.title().should("eq","DEMOQA");
  });
  
  it("url  should be https://demoqa.com/ ", () => {
    cy.url().should("eq", "https://demoqa.com/");
  });
  it("should use https", () => {
    cy.location("protocol").should("contains", "https");
  });
  it("should hostname demoqa.com", ()=> {
    cy.location("hostname").should("eq","demoqa.com");
  });
 it("should pathname /forms", ()=> {
  cy.log('test');//esto lo uso pa encontrar el codigo q sigue debajo
  cy.get(".card-body").eq(1).click();
  cy.location("pathname").should("eq","/forms");
  });

 /*it("should pathname /forms", ()=> {

 cy.get(":nth-child(2) > :nth-child(1) > .card-up").click();
 cy.location("pathname").should("eq","/forms");
});*/

it("should 2 pathname /forms", ()=> {

  cy.get(".card-body").contains('Forms').click();
  cy.location("pathname").should("eq","/forms");
 });
 
});

