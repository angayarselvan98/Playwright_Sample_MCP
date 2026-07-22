Feature: Login
  As a registered user
  I want to log into the SauceDemo application
  So that I can access the products page

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I log in with valid credentials
    Then I should be redirected to the inventory page

  Scenario: Login fails with a locked out user
    When I log in with locked out user credentials
    Then I should see the locked out error message

  Scenario: Login fails with invalid credentials
    When I log in with invalid credentials
    Then I should see the invalid credentials error message
