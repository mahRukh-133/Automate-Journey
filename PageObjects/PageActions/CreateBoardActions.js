const BoardElementsLocators = require ('../PageElements/CreateBoard.json')
export class CreateBoardElements{

    newboardbtn(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.NewBoardBtn_text).should('be.visible').click()
        return
    }


    createTemplate(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.CreateCustomTemplate_text).should('be.visible').click()
    }

    NewBoardHeading(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.CreateBoardHeading_text).should('be.visible')
    }

    BoardTitle(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.BoardTitle_text).should('be.visible').click().type('New Test Board')
    }

    Descripton(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.BoardDescription).should('be.visible').click().type('Description of Board')
    }

    CreateBoardBTN(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.CreateBoardBTN).click()
    }
}