const BoardElementsLocators = require ('../PageElements/CreateBoard.json')
export class CreateBoardElements{

    newboardbtn(){
        cy.get(BoardElementsLocators.CreateBoardPageLocators.NewBoardBtn_text).should('be.visible').click()
        return
    }




}