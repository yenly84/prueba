//importando pagina
//import homeIteraPage from "./homeIteraPage";
const homeIteraPage= require('./homeIteraPageXpath')
import homeDashboardPage from "./homeDashboardPage";
const tests =require('../fixtures/User.json')

describe('Home Itera', () => {
  beforeEach( ()=> {
    cy.visit('https://itera-qa.azurewebsites.net/Login/'); 
  })
   tests.forEach(test=>{
    it(test.name,()=>{
      homeIteraPage.typeUsername(test.user);
      
      homeIteraPage.typePasword(test.password);
      homeIteraPage.clicklogin();
      if(test.name ==='userCorrect'){
        homeDashboardPage.elements.titleSpan().should('have.text',test.expected);

      }
      else{
       homeIteraPage.elements.errorMsj().should('contain',test.expected);
      }

    })

    }) 
});

