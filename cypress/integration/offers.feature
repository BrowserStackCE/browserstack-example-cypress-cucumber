Feature: Offers Feature

  @offers
  Scenario: Offers for Mumbai location
    Given I navigate to website
    And I SignIn as "fav_user" with "testingisfun99" password
    And I click on "Offers" link
    Then Check Offers available or not
