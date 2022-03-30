/// <reference types ="cypress"/>

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

import Login from "../../pageObjects/login";
const login = new Login();

Given("I navigate to website", () => {
  cy.visit(Cypress.config().baseUrl);
});
And("I click on {string} link", (link) => {
  cy.contains(link).click();
});
And('I type {string} in "username"', (username) => {
  login
    .username()
    .should("be.visible")
    .click({ force: true })
    .type(username + "{enter}");
});
And('I type {string} in "password"', (password) => {
  login
    .password()
    .click({ force: true })
    .type(password + "{enter}");
});
And("I press Log In Button", () => {
  login.logInButton().click();
});
Then("I should see user {string} logged in", (username) => {
  cy.get(".username").should("have.text", username);
});

And("I press Log Out Button", () => {
  login.logOutButton().click();
});

Then("I should see {string} as Login Error Message", (lockMessage) => {
  cy.get(".api-error").should("have.text", lockMessage);
});
