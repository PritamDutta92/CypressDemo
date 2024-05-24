Feature: saucedemo smoke test

    @VerifyInvalidLogin
    Scenario Outline: Check password validation message
        Given the user is on saucedemo login page
        When the user enters a correct <username> and invalid <password>
        Then the password validation failure message should be displayed

        Examples:
        |username|password|
        |visual_user|YWJjZDEyMw==|
