import homeTrello from "./homeTrello"
const filePath='cypress/fixtures/readWrite.json'
const token='642d51feadb80584da18ebfc/ATTSWdENx9jR4j0A2GhI4dJSjSyNpCFtc5WANYDGp6gc4yG3n7TVjdUTYx5NaTvrEXwHAE1C6050'
//const key= '1609e814bfa14a3db09f984e6426cfd3'
const idList="642d72591c706da9a4f86542"
const endpoint= 'https://id.atlassian.com/login?application=trello'

describe('Read/Write fixture demo', () => {
  beforeEach( ()=> {
    cy.visit(endpoint); 
  })

    it('should login page Trello', ()=> {
      homeTrello.typeUsername('yenlyperez3@gmail.com')
      homeTrello.clickCont()
      homeTrello.typePass('Sabrina123*')
      homeTrello.clickIni()
      homeTrello.clickTrello()
   
     })   
    it('Agregar la respuesta de una api a un json',()=>{
      cy.request('Get','https://trello.com/c/YJhQYPtQ/1-p1').then(
        response => {
          // response.body is automatically serialized into JSON
        cy.log(response)
        cy.writeFile(filePath,response.body)
    
  })
  
        })
    
    })
   /* it('Agregar más respuesta de una api a un json',()=>{
        cy.request('GET','https://trello.com/1/lists/64189c75e57bbea121c5d58f')
       .its('body')
       .each(objeto=>{cy.readFile(filePath).then(array=>{
array.push(objeto)
cy.writeFile(filePath,array)
       })
    })*/
    
  



