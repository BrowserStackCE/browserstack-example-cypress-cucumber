/// <reference types ="cypress"/>

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Given("I navigate to website", () => {
  cy.visit(Cypress.config().baseUrl);
});
And("I press the Apple Vendor Filter", () => {
  cy.get(".filters-available-size:nth-child(2) .checkmark").click();
});

// compleate:
Then("I should see {int} items in the list", (number) => {
  cy.get(".shelf-item__title").should("have.length", number);
});

And("I order by lowest to highest", () => {
  cy.get("select").select("lowestprice");
  // .get("option[value = 'lowestprice']").click();
});

// TODO:
Then("I should see prices in ascending order", () => {
  cy.wait(5000);
  let allPrices = [];
  cy.get(".shelf-item__price > div.val > b")
    .each((priceContent) => {
      const price = parseInt(priceContent[0].innerHTML);
      allPrices.push(price);
    })
    .then(() => {
      let flag = true;
      if (allPrices[0] > allPrices[1]) {
        flag = false;
      }
      expect(flag).to.equal(true, "Prices are not sorted");
    });
  cy.screenshot();
});
