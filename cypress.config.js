const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges: true,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://bstackdemo.com/",
    excludeSpecPattern: ["*.js"],
  },
});
