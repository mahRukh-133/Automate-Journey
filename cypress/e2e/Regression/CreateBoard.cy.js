import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"
import { CreateBoardElements } from "../../../PageObjects/PageActions/CreateBoardActions"
const Login_Elements = new loginPageElements
const Board_Elements =new CreateBoardElements
describe('Create Board',()=>{

 it('Create Board',()=>{

    cy.visit("https://www.reetro.app/")
    Login_Elements.email('mahrukh.loxvo13+jack@gmail.com')
    Login_Elements.password('test1234')
    Login_Elements.LoginButton()
    cy.get(':nth-child(3) > .team-box-button').click()
    Board_Elements.newboardbtn()
 })


})