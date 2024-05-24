const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "uqzcb9",
  video: true,
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
