import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginpage from '../AllPages/loginpage.cy';

const loginpageobj = new loginpage();

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    
  })

  Given('the user is on saucedemo login page', () => {
    cy.viewport(1366, 768)
    cy.visit('/',{failOnStatusCode: false});
  });

  When('the user enters a correct {} and invalid {}', (username,invalidpassword) => {

    
    loginpageobj.EnterCredentials(username,atob(invalidpassword));

  });

  Then ('the password validation failure message should be displayed', () => {

    loginpageobj.VerifyPasswordValidationErrorMessage();
    cy.screenshot('PasswordVerificationMessage.jpg');
    cy.wait(1000);

  });