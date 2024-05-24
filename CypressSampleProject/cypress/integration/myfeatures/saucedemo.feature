Feature: saucedemo smoke test

    @VerifyInvalidLogin
    Scenario Outline: Check password validation message
        Given the user is on saucedemo login page
        When the user enters a correct <username> and invalid <password>
        Then the password validation failure message should be displayed

        Examples:
        |username|password|
        |visual_user|YWJjZDEyMw==|

    @VerifyProductDescriptionAndProductPrice
    Scenario Outline: Check Product Description and Product Price in cart
        Given the user is on saucedemo login page
        When the user enters correct <username> and <password>
        Then the user should be able to login successfully
        When the user filters the product by price low to high
        Then the user should be able to filter it
        When the user selects shopping items
        Then the user should be able to add them in cart
        When the user navigates to cart page
        Then the user should be able to veirfy product description and product price

        Examples:
        |username|password|
        |standard_user|c2VjcmV0X3NhdWNl|
