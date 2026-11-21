Feature: Product Detail Page
  As a logged in user
  I want to view a single product's details and navigate back
  So that I can inspect items before buying

  Background:
    Given I am logged in as a standard user

  Scenario: Navigate to a product detail page and back to the inventory page
    When PR Request file
    Then This is modified based on comment from TL