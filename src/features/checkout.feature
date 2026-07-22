Feature: Checkout Flow
  As a logged in user
  I want to complete the checkout process
  So that I can purchase the items in my cart

  Background:
    Given I am logged in as a standard user
    And I have added "Sauce Labs Backpack" to the cart
    And I go to the cart page
    And I proceed to checkout

  Scenario: Checkout fails without required information
    When I continue without filling checkout information
    Then I should see the missing first name error message

  Scenario: Cancel checkout information returns to the cart page
    When I cancel the checkout information
    Then I should be redirected to the cart page

  Scenario: Valid checkout information leads to the overview page
    When I fill in valid checkout information
    And I continue to the overview page
    Then I should be on the checkout overview page

  Scenario: Cancel checkout overview returns to the inventory page
    Given I fill in valid checkout information
    And I continue to the overview page
    When I cancel the checkout overview
    Then I should be redirected to the inventory page

  Scenario: Completing checkout shows the order confirmation
    Given I fill in valid checkout information
    And I continue to the overview page
    When I finish the checkout
    Then I should see the order confirmation message
    When I click the back home button
    Then I should be redirected to the inventory page
