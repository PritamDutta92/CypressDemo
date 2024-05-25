import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import loginpage from '../AllPages/loginpage.cy';
import SwagLabsLandingPage from '../AllPages/SwagLabsLandingPage.cy';
import Cartpage from '../AllPages/Cartpage.cy';
import Yourinfo from '../AllPages/Yourinfo.cy';
import CheckoutOverview from '../AllPages/CheckoutOverview.cy';
import CheckoutComplete from '../AllPages/CheckoutComplete.cy';

const loginpageobj = new loginpage();
const SwagLabsLandingPageobj = new SwagLabsLandingPage();
const Cartpageobj = new Cartpage();
const Yourinfoobj = new Yourinfo();
const CheckoutOverviewobj = new CheckoutOverview();
const CheckoutCompleteobj = new CheckoutComplete();

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
    cy.screenshot('PasswordVerificationMessage.jpg');

  });

  When('the user enters correct {} and {}', (username,password) => {

    // using atob inbuilt Javascript function to pass base64 encrypted password, this is for security purpose
    loginpageobj.EnterCredentials(username,atob(password));

  });

  Then ('the user should be able to login successfully', () => {

    loginpageobj.VerifyLandingPageAfterlogin();
    cy.screenshot('LandingPageAfterLogin.jpg');

  });

  When('the user filters the product by price low to high', () => {

    SwagLabsLandingPageobj.FilterproductsPriceLowtoHigh();
    cy.screenshot('AfterFilterPriceLowtoHigh.jpg');
  });

  Then ('the user should be able to filter it', () => {

    cy.wait(1000);
  });

  When('the user selects shopping items', () => {

    SwagLabsLandingPageobj.AddFirstandLastListedProductinCart();
    cy.screenshot('AddFirstandLastListedItems.jpg');
  });

  Then ('the user should be able to add them in cart', () => {

    
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
  });

  When('the user adds a product to the cart', () => {

    SwagLabsLandingPageobj.AddProducttoCart();
    cy.screenshot('AddproducttoCart.jpg');
    SwagLabsLandingPageobj.GotoCartPage();
    cy.screenshot('CartPage.jpg');
  });

  Then('the user should be able to do checkout via cart page', () => {

    Cartpageobj.ClickCheckoutButton();
  });

  When('the user fills in all required information', () => {

    Yourinfoobj.VerifyYourinfoPageloaded();
    Yourinfoobj.Enteryourinfo();
    cy.screenshot('YourInfo.jpg');
    Yourinfoobj.ClickContinuebuttoninYourinfo();
  });

  Then('the user should be able to complete the checkout', () => {

    CheckoutOverviewobj.ClickonFinishButton();
  });

  And('the user should be able to verify checkout completion and order dispatch message', () => {

    cy.screenshot('OrderPlacement.jpg');
    CheckoutCompleteobj.VerifyCheckoutComplete();
    CheckoutCompleteobj.VerifyOrderDispatchMessage();
  });

