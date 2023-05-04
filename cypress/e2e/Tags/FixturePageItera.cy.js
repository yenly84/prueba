//importando pagina
import homeIteraPage from "../homeIteraPage";
import homeDashboardPage from "../homeDashboardPage";

const tests =require('../../fixtures/User.json')

describe('Home Itera(regression,sanity)',{tags:['@regressionTag','@sanityTag']}, () => {
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

