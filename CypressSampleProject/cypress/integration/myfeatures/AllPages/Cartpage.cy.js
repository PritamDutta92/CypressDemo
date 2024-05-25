import SwagLabsLandingPage from "./SwagLabsLandingPage.cy"

const SwagLabsLandingPageOBJ = new SwagLabsLandingPage();
class Cartpage {

    VerifyFirstProductDescriptioninCart(){

        const VerifyfsProductDesc = cy.get('div.inventory_item_desc').first();
        cy.get('@FirstProductDescriptiontxt').then(FirstProductDescriptiontxt => {

            VerifyfsProductDesc.then(($VerifyFirstProductDescription) => {
                const VerifyFirstProductDescription = $VerifyFirstProductDescription.text();
                cy.log("First Product Descripton - "+VerifyFirstProductDescription)
                expect(VerifyFirstProductDescription).to.contains(FirstProductDescriptiontxt);
                
                })
            
         })
       
    }

    VerifyFirstProductPriceinCart(){

        const VerifyfsProductPrice = cy.get('div.inventory_item_price').first();
        cy.get('@FirstProductPricetxt').then(FirstProductPricetxt => {

            VerifyfsProductPrice.then(($VerifyFirstProductPrice) => {
                const VerifyFirstProductPrice = $VerifyFirstProductPrice.text();
                cy.log("First Product Price - "+VerifyFirstProductPrice);
                expect(VerifyFirstProductPrice).to.contains(FirstProductPricetxt);
                
                })
            
         })
       
    }

    VerifyLastProductDescriptioninCart(){

        const VerifylsProductDesc = cy.get('div.inventory_item_desc').last();
        cy.get('@LastProductDescriptiontxt').then(LastProductDescriptiontxt => {

            VerifylsProductDesc.then(($VerifyLastProductDescription) => {
                const VerifyLastProductDescription = $VerifyLastProductDescription.text();
                cy.log("First Product Descripton - "+VerifyLastProductDescription)
                expect(VerifyLastProductDescription).to.contains(LastProductDescriptiontxt);
                
                })
            
         })
    }

    VerifyLastProductPriceinCart(){

        const VerifylsProductPrice = cy.get('div.inventory_item_price').last();
        cy.get('@LastProductPricetxt').then(LastProductPricetxt => {

            VerifylsProductPrice.then(($VerifyLastProductPrice) => {
                const VerifyLastProductPrice = $VerifyLastProductPrice.text();
                cy.log("Last Product Price - "+VerifyLastProductPrice);
                expect(VerifyLastProductPrice).to.contains(LastProductPricetxt);
                
                })
            
         })
       
    }

    ClickCheckoutButton(){

        cy.get('button#checkout').scrollIntoView().click({ force: true });
    }


}

export default Cartpage