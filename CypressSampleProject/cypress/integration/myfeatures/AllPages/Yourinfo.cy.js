class Yourinfo {

    VerifyYourinfoPageloaded(){

        cy.get('input#first-name',{ timeout: 25000 }).should('be.visible');
    }

    Enteryourinfo(){

        cy.get('input#first-name').type("Pritam");
        cy.get('input#last-name').type("Dutta");
        cy.get('input#postal-code').type("700090");
    }

    ClickContinuebuttoninYourinfo() {

        cy.get('input#continue').scrollIntoView().click({ force: true });
    }


}

export default Yourinfo