class CheckoutOverview {

    ClickonFinishButton(){
        
        cy.get('button#finish',{ timeout: 25000 }).should('be.visible');
        cy.get('button#finish').scrollIntoView().click({ force: true });
    }
}

export default CheckoutOverview