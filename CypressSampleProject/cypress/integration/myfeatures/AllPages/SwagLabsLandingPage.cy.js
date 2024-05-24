class SwagLabsLandingPage {

    FilterproductsPriceLowtoHigh(){

        cy.get("select").select("lohi");
        // Assertion to check filtering worked or not
        cy.get("select").select("lohi").invoke("val").should("eq", "lohi");
    }

    AddFirstandLastListedProductinCart() {

        const fs = cy.get('div.inventory_list> div.inventory_item> div.inventory_item_description>div.pricebar>button').first();
        cy.wait(1000);
        cy.log(fs);
        fs.scrollIntoView().click({ force: true });
       

        const ls = cy.get('div.inventory_list> div.inventory_item> div.inventory_item_description>div.pricebar>button').last();
        cy.wait(1000);
        cy.log(ls);
        ls.scrollIntoView().click({ force: true });
        
    }

    GetFirstProductDescriptionsinLandingPage() {

        const fsProductDesc = cy.get('div.inventory_item_description > div.inventory_item_label > div').first();
        fsProductDesc.then(($FirstProductDescription) => {
        const FirstProductDescriptiontxt = $FirstProductDescription.text();
        cy.log("First Product Descripton - "+FirstProductDescriptiontxt)
        cy.wrap(FirstProductDescriptiontxt).as('FirstProductDescriptiontxt');
        })
    }

    GetLastProductDescriptionsinLandingPage() {

        const lsProductDesc = cy.get('div.inventory_item_description > div.inventory_item_label > div').last();
        lsProductDesc.then(($LastProductDescription) => {
        const LastProductDescriptiontxt = $LastProductDescription.text();
        cy.log("Last Product Descripton - "+LastProductDescriptiontxt);
        cy.wrap(LastProductDescriptiontxt).as('LastProductDescriptiontxt');
        })
    }

    GetFirstProductPriceinLandingPage(){

        const fsProductPrice = cy.get('div.inventory_list> div.inventory_item> div.inventory_item_description>div.pricebar>div.inventory_item_price').first();
        fsProductPrice.then(($FirstProductPrice) => {
        const FirstProductPricetxt = $FirstProductPrice.text();
        cy.log("First Product Price - "+FirstProductPricetxt)
        cy.wrap(FirstProductPricetxt).as('FirstProductPricetxt');
        })
    }

    GetLastProductPriceinLandingPage(){

        const lsProductPrice = cy.get('div.inventory_list> div.inventory_item> div.inventory_item_description>div.pricebar>div.inventory_item_price').last();
        lsProductPrice.then(($LastProductPrice) => {
        const LastProductPricetxt = $LastProductPrice.text();
        cy.log("First Product Price - "+LastProductPricetxt)
        cy.wrap(LastProductPricetxt).as('LastProductPricetxt');
        })
    }

    GotoCartPage(){

        cy.get('a.shopping_cart_link').scrollIntoView().click({ force: true });
    }

}

export default SwagLabsLandingPage