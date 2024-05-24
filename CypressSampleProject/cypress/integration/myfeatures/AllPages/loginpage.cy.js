class loginpage {

    EnterCredentials(Username, Password) {

        cy.get('input[placeholder="Username"]').scrollIntoView().type(Username);
        cy.get('input[placeholder="Password"]').scrollIntoView().type(Password);
        cy.get('input[type="submit"]').scrollIntoView().click({ force: true });


    }

    VerifyPasswordValidationErrorMessage() {

        cy.get('div[class="error-message-container error"]', { timeout: 10000 }).should('be.visible');
        cy.get('div[class="error-message-container error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    }

    VerifyLandingPageAfterlogin() {

        cy.get('select[class="product_sort_container"]', { timeout: 10000 }).should('be.visible');
    }
}

export default loginpage