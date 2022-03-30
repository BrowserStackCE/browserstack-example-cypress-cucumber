/// <reference types ="cypress"/>

const { AssertionError } = require("chai");
const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Given("I navigate to website", () => {
  cy.visit(Cypress.config().baseUrl + "signin");
});
And("I SignIn as {string} with {string} password", (username, password) => {
  cy.get("#username")
    .click()
    .type(username + "{enter}");
  cy.get("#password")
    .click()
    .type(password + "{enter}");
  cy.get("#login-btn").click();
});

And("I click on {string} link", (link) => {
  cy.contains(link).click();
});

Then("Check Offers available or not", () => {
  cy.get(".shelf-item__price", { timeout: 5000 }).should("be.visible");
  Cypress.log({
    name: "Known Cypress issue",
    message:
      "Link to the issue: https://github.com/cypress-io/cypress/issues/2671",
  }); // this should fail
});
