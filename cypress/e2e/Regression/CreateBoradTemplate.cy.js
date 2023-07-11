import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions";
import { CreateBoardTemplateElements } from "../../../PageObjects/PageActions/BoardTemplateActions";
describe('Create Board from Given Template',()=>{
    const Login_Elements = new loginPageElements
    const TemplateBoard_Elements =new CreateBoardTemplateElements
 
    it('Board Creation from Given ', () => {
    cy.visit("https://www.reetro.app/")
    Login_Elements.email('automationtesting384@gmail.com')
    Login_Elements.password('test1234')
    Login_Elements.LoginButton()
    TemplateBoard_Elements.newboardbtn()
    TemplateBoard_Elements.selectTemplate()
    TemplateBoard_Elements.AddTitle()
    TemplateBoard_Elements.CreateButton()
    TemplateBoard_Elements.MessageConfirmation()



    });

})