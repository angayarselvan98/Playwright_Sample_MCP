Feature: Product Detail Page
  As a logged in user
  I want to view a single product's details and navigate back
  So that I can inspect items before buying

  Background:
    Given I am logged in as a standard user

  Scenario: Navigate to a product detail page and back to the inventory page
    When I open the product "Sauce Labs Backpack"
    Then I should see the product detail page for "Sauce Labs Backpack"
    When I click the back to products button
    Then I should be redirected to the inventory page

  Scenario: Add a product to the cart from the detail page
    When I open the product "Sauce Labs Backpack"
    And I add the product to the cart from the detail page
    Then the cart badge should show "1"
