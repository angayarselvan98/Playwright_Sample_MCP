Feature: Inventory Page
  As a logged in user
  I want to browse, sort and add products to my cart
  So that I can shop for items

  Background:
    Given I am logged in as a standard user

  Scenario: Inventory page displays all products
    Then I should see 6 products listed

  Scenario Outline: Sort products by <option>
    When I sort products by "<option>"
    Then the products should be sorted in "<order>" order

    Examples:
      | option | order           |
      | az     | name_ascending  |
      | za     | name_descending |
      | lohi   | price_ascending |
      | hilo   | price_descending|

  Scenario: Add a product to the cart from the inventory page
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"

  Scenario: Remove a product from the cart from the inventory page
    Given I have added "Sauce Labs Backpack" to the cart
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart badge should not be visible
