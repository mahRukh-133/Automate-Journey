import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new loginPageElements

describe('POM',()=>{

 it('',()=>{

    cy.visit("https://www.reetro.app/")
    Login_Elements.email('mahrukh.loxvo13+jack@gmail.com')
    Login_Elements.password('test1234')
    Login_Elements.LoginButton()
 })


})