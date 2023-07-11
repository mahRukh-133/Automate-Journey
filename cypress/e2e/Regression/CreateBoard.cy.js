import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"
import { CreateBoardElements } from "../../../PageObjects/PageActions/CreateBoardActions"
const Login_Elements = new loginPageElements
const Board_Elements =new CreateBoardElements
describe('Create Board',()=>{

 it('Create Board',()=>{

    cy.visit("https://www.reetro.app/")
    Login_Elements.email('automationtesting384@gmail.com')
    Login_Elements.password('test1234')
    Login_Elements.LoginButton()
    Board_Elements.newboardbtn()
    Board_Elements.createTemplate()
    Board_Elements.NewBoardHeading()
    Board_Elements.BoardTitle()
    Board_Elements.Descripton()
    Board_Elements.CreateBoardBTN()
 })


})