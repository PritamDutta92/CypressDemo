class CheckoutComplete {

    VerifyCheckoutComplete(){

        cy.get('span.title',{ timeout: 25000 }).should('be.visible');
        cy.get('span.title').should('have.text','Checkout: Complete!');
        cy.get('span.title').then(($CheckoutComplete) => {
            const CheckoutCompleteText = $CheckoutComplete.text();
            cy.log("CheckOut Complete text displayed in UI is - "+CheckoutCompleteText);
            expect(CheckoutCompleteText).to.contains("Checkout: Complete!");
            
            })
    }

    VerifyOrderDispatchMessage() {

        cy.get('div.complete-text').should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }


}

export default CheckoutComplete