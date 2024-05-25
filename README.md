# CypressDemo
This repository is holding a Cypress Demo project in Behavior Driven Development (BDD) format

## Prerequisites

 - To run CypressSampleProject Node.js (v20.13.1) should be installed in your system
 - After doing the git clone from Command line go to project directory (CypressDemo\CypressSampleProject)
 - Install cypress and cypress-cucumber-preprocessor npm modules inside the project directory
 - Commands to install cypress and cypress-cucumber-preprocessor npm module -->
	```bash
		npm install cypress
		npm install cypress-cucumber-preprocessor
    ```

##	Running Tests

  To run tests, execue the following command from project root directory (CypressDemo\CypressSampleProject)
```bash
   npx cypress run --spec "**\saucedemo.feature" --browser chrome
```	