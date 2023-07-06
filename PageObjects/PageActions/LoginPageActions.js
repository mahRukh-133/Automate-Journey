const loginElementsLocators = require('../PageElements/LoginPageElements.json')
export class loginPageElements {

    email(emaill){
        cy.get(loginElementsLocators.loginPageLocators.email_text).should('be.visible').click().type(emaill)
        return
    }

    password(passwordd){
        cy.get(loginElementsLocators.loginPageLocators.password_text).should('be.visible').click().type(passwordd)
        return
    }

    LoginButton(){

        cy.get(loginElementsLocators.loginPageLocators.login_button).should('have.text', 'log in').click(  )
           return
    }


}