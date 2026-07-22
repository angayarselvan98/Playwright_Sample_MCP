Feature: Cart Page
  As a logged in user
  I want to review and manage items in my cart
  So that I can proceed to checkout with the right items

  Background:
    Given I am logged in as a standard user
    And I have added "Sauce Labs Backpack" to the cart
    And I go to the cart page

  Scenario: Cart page displays the added item
    Then the cart should contain "Sauce Labs Backpack"

  Scenario: Remove an item from the cart page
    When I remove "Sauce Labs Backpack" from the cart page
    Then the cart should be empty

  Scenario: Continue shopping returns to the inventory page
    When I click continue shopping
    Then I should be redirected to the inventory page

  Scenario: Proceed to checkout from the cart page
    When I proceed to checkout
    Then I should be on the checkout information page
