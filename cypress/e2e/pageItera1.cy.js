//importando pagina
import homeIteraPage from "./homeIteraPage";
import homeDashboardPage from "./homeDashboardPage";

describe('page implementacion', () => {
  beforeEach( ()=> {
    cy.visit('https://itera-qa.azurewebsites.net/Login/'); 
  })

    it('should login page Dashboard page', ()=> {
      homeIteraPage.typeUsername('yeni')
      homeIteraPage.typePasword('Test123')
      homeIteraPage.clicklogin()
      cy.log('dashboard');
    homeDashboardPage.elements.titleSpan().should('contain','Dashboard');
    homeDashboardPage.elements.titleSpan().should('have.text','lola');

     })
 
});

