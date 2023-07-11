const BoardTemplateElementsLocators = require('../PageElements/BoardCreationTemplate.json')
export class CreateBoardTemplateElements{

    newboardbtn(){
        cy.get(BoardTemplateElementsLocators.CreateBoardTemplatePageLocators.NewBoardBtn_text).should('be.visible').click()
        return
    }

    selectTemplate(){
        cy.get(BoardTemplateElementsLocators.CreateBoardTemplatePageLocators.SelectTemplate).invoke('click')
    }

    AddTitle(){
        cy.get(BoardTemplateElementsLocators.CreateBoardTemplatePageLocators.AddTitle_Text).should('be.visible').click().clear().type('Board title template')
    }

    CreateButton(){
        cy.get(BoardTemplateElementsLocators.CreateBoardTemplatePageLocators.CreateBoardBTN).click()
    }

    MessageConfirmation(){
        cy.get(BoardTemplateElementsLocators.CreateBoardTemplatePageLocators.ConfirmationMsg).click().should('be.visible')
    }
    }
