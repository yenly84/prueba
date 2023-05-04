class homeTrello{
    elements={
     usernameInput: () => cy.get("#username"),
     btCont: () => cy.get("#login-submit"),
     passInput: () => cy.get("#password"),
     btIni: () => cy.get("#login-submit"),
    btnSelect:()=>cy.get(".sc-eHgmQL")
    }
    typeUsername(username){
      this.elements.usernameInput().type(username)
    }
    typePass(pass){
        this.elements.passInput().type(pass)
    }
    clickCont(){
      this.elements.btCont().click();
    }
    clickIni(){
      this.elements.btIni().click();
    }
    clickTrello(){
      this.elements.btnSelect().click();
    }
  }
  module.exports= new homeTrello();
  