class homeIteraPage{
    elements={
      usernameInput: () => cy.xpath('//input[@name="Username"]'),
      passwordInput: () => cy.xpath('//input[@name="Password" or @id="Password"]'),
      loginBt: () => cy.xpath('//*[@type="submit" and @name="login"]'),
      errorMsj: () => cy.xpath('//label[@class="alert-danger"]')
  
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
  