describe ('Variables y alias',()=>{
  beforeEach(function(){
    cy.visit('https://demoqa.com/modal-dialogs')
})
//it('Funcionamiento de variable,a la retornar un valor',()=>{
  //const smallModalText=cy.get('#showSmallModal').text()
  //cy.log('smallModalText')
//})
it('Closures & Variables',()=>{
cy.get('#showSmallModal').then($modalButton=>{
  const smallModalText= $modalButton.text()
  cy.log(smallModalText)
  $modalButton.click()
  // {matchCase:false} esta opción es porque el texto es el mismo, pero las minusculas no coinciden
  cy.get('#example-modal-sizes-title-sm').contains(smallModalText,{matchCase:false})
})
});
it('Aliases',function(){
  cy.get('#showSmallModal').invoke('text').as('InvokeText')
  cy.get('#showSmallModal').then($modalButton=>{
    const smallModalText= $modalButton.text()
    cy.log(smallModalText)
    cy.wrap(smallModalText).as('WrapText') //wrap guarda el valor de la variable y con as se le asigna un valor para usarlo fuera del it
});

});


it('share context',function(){
  //cy.log(this.InvokeText)
  cy.log('INVOKE:'+this.InvokeText)
  cy.log('WRAP:'+this.WrapText)


});
});