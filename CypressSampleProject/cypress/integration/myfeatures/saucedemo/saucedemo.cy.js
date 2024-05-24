import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginpage from '../AllPages/loginpage.cy';
import SwagLabsLandingPage from '../AllPages/SwagLabsLandingPage.cy';
import Cartpage from '../AllPages/Cartpage.cy';

const loginpageobj = new loginpage();
const SwagLabsLandingPageobj = new SwagLabsLandingPage();
const Cartpageobj = new Cartpage();

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

    // using atob inbuilt Javascript function to pass base64 encrypted password, this is for security purpose
    loginpageobj.EnterCredentials(username,atob(invalidpassword));

  });

  Then ('the password validation failure message should be displayed', () => {

    loginpageobj.VerifyPasswordValidationErrorMessage();
    //cy.screenshot('PasswordVerificationMessage.jpg');
    cy.wait(1000);

  });

  When('the user enters correct {} and {}', (username,password) => {

    // using atob inbuilt Javascript function to pass base64 encrypted password, this is for security purpose
    loginpageobj.EnterCredentials(username,atob(password));

  });

  Then ('the user should be able to login successfully', () => {

    loginpageobj.VerifyLandingPageAfterlogin();
    //cy.screenshot('LandingPageAfterLogin.jpg');
    cy.wait(1000);

  });

  When('the user filters the product by price low to high', () => {

    SwagLabsLandingPageobj.FilterproductsPriceLowtoHigh();
  });

  Then ('the user should be able to filter it', () => {

    cy.wait(1000);
  });

  When('the user selects shopping items', () => {

    SwagLabsLandingPageobj.AddFirstandLastListedProductinCart();
  });

  Then ('the user should be able to add them in cart', () => {

    cy.wait(1000);
    SwagLabsLandingPageobj.GetFirstProductDescriptionsinLandingPage();
    SwagLabsLandingPageobj.GetLastProductDescriptionsinLandingPage();
    SwagLabsLandingPageobj.GetFirstProductPriceinLandingPage();
    SwagLabsLandingPageobj.GetLastProductPriceinLandingPage();
  });

  When('the user navigates to cart page', () => {

    SwagLabsLandingPageobj.GotoCartPage();
  });

  Then ('the user should be able to veirfy product description and product price', () => {

    Cartpageobj.VerifyFirstProductDescriptioninCart();
    Cartpageobj.VerifyLastProductDescriptioninCart();
    Cartpageobj.VerifyFirstProductPriceinCart();
    Cartpageobj.VerifyLastProductPriceinCart();
    cy.wait(1000);
  });

