Feature: Navigation Menu
  As a logged in user
  I want to use the hamburger menu
  So that I can navigate the site, reset state and log out

  Background:
    Given I am logged in as a standard user

  Scenario: Open and close the hamburger menu
    When I open the hamburger menu
    Then the menu should be visible
    When I close the hamburger menu
    Then the menu should not be visible

  Scenario: All Items link returns to the inventory page from another page
    Given I have added "Sauce Labs Backpack" to the cart
    And I go to the cart page
    When I open the hamburger menu
    And I click the All Items link
    Then I should be redirected to the inventory page

  Scenario: About link navigates to the Sauce Labs website
    When I open the hamburger menu
    And I click the About link
    Then I should be redirected to the Sauce Labs website

  Scenario: Reset App State clears the cart
    Given I have added "Sauce Labs Backpack" to the cart
    When I open the hamburger menu
    And I click Reset App State
    Then the cart badge should not be visible

  Scenario: Logout returns to the login page
    When I open the hamburger menu
    And I click Logout
    Then I should be redirected to the login page
