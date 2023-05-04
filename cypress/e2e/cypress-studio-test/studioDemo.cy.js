/* ==== Test Created with Cypress Studio ==== */
it('web-tables-demo', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/webtables');
  cy.get('#addNewRecordButton').click();
 
  cy.get('#firstName').clear();
  cy.get('#firstName').type('Yen');
  cy.get('#lastName').clear();
  cy.get('#lastName').type('test');
  cy.get('#userEmail').clear();
  cy.get('#userEmail').type('yen@test.com');
  cy.get('#age').clear();
  cy.get('#age').type('40');
  cy.get('#salary').clear();
  cy.get('#salary').type('2000');
  cy.get('#department').clear();
  cy.get('#department').type('qa');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#submit').click();
  /* ==== End Cypress Studio ==== */
});