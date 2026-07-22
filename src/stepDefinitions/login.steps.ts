import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/login.page';
import { LoginTestData, ExpectedMessages } from '../data/testData';

Given('I am on the login page', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('I log in with valid credentials', async function (this: CustomWorld) {
  await this.loginPage.login(LoginTestData.validUser.username, LoginTestData.validUser.password);
});

When('I log in with locked out user credentials', async function (this: CustomWorld) {
  await this.loginPage.login(LoginTestData.lockedOutUser.username, LoginTestData.lockedOutUser.password);
});

When('I log in with invalid credentials', async function (this: CustomWorld) {
  await this.loginPage.login(LoginTestData.invalidUser.username, LoginTestData.invalidUser.password);
});

Then('I should be redirected to the inventory page', async function (this: CustomWorld) {
  expect(await this.loginPage.isOnInventoryPage()).toBeTruthy();
  expect(await this.loginPage.getInventoryTitle()).toBe(ExpectedMessages.inventoryPageTitle);
});

Then('I should see the locked out error message', async function (this: CustomWorld) {
  expect(await this.loginPage.getErrorMessage()).toBe(ExpectedMessages.lockedOutError);
});

Then('I should see the invalid credentials error message', async function (this: CustomWorld) {
  expect(await this.loginPage.getErrorMessage()).toBe(ExpectedMessages.invalidCredentialsError);
});
