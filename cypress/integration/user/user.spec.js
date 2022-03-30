/// <reference types ="cypress"/>

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");
require("cypress-xpath");

import Login from "../../pageObjects/login";
const login = new Login();

Given("I navigate to website", () => {
  cy.visit(Cypress.config().baseUrl + "signin");
});
And("I SignIn as {string} with {string} password", (username, password) => {
  login
    .username()
    .should("be.visible")
    .click({ force: true })
    .type(username + "{enter}");
  login
    .password()
    .click({ force: true })
    .type(password + "{enter}");
  login.logInButton().click();
});

Then("I should see no image loaded", () => {
  cy.get(".shelf-item__thumb", { timeout: 30000 })
    .should("be.visible")
    .children('img[src=""]')
    .its("length")
    .should("equal", 25);
});

And("I click on {string} link", (link) => {
  cy.contains(link).click();
});

And("I press Log Out Button", () => {
  login.logOutButton().click();
  // cy.get("#logout").click();
});

Then("I should see elements in list", () => {
  cy.xpath("/html/body/div/main/div/div/div/div[2]/div/div[2]")
    .children("div")
    .should("have.length", 17);
});
