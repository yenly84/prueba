class homeIteraPage{
    elements={
      usernameInput: () => cy.get("#Username"),
      passwordInput: () => cy.get("#Password"),
      loginBt: () => cy.get('[name="login"]'),
      errorMsj: () => cy.get(".alert-danger")
  
    }
    typeUsername(username){
      this.elements.usernameInput().type(username)
    }
    typePasword(password){
      this.elements.passwordInput().type(password)
    }
    clicklogin(){
      this.elements.loginBt().click();
    }
  }
  module.exports= new homeIteraPage();
  