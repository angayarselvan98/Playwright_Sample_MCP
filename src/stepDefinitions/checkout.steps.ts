import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { CheckoutTestData, ExpectedMessages } from '../data/testData';
import { ROUTES } from '../data/constants';

When('I continue without filling checkout information', async function (this: CustomWorld) {
  await this.checkoutPage.continueToOverview();
});

Then('I should see the missing first name error message', async function (this: CustomWorld) {
  expect(await this.checkoutPage.getErrorMessage()).toBe(ExpectedMessages.missingFirstNameError);
});

When('I cancel the checkout information', async function (this: CustomWorld) {
  await this.checkoutPage.cancel();
});

Then('I should be redirected to the cart page', async function (this: CustomWorld) {
  await this.page.waitForURL((url) => url.toString().includes(ROUTES.CART));
  expect(await this.cartPage.getTitle()).toBe(ExpectedMessages.cartPageTitle);
});

Given('I fill in valid checkout information', async function (this: CustomWorld) {
  const { firstName, lastName, postalCode } = CheckoutTestData.validCustomer;
  await this.checkoutPage.fillCustomerInfo(firstName, lastName, postalCode);
});

When('I continue to the overview page', async function (this: CustomWorld) {
  await this.checkoutPage.continueToOverview();
});

Then('I should be on the checkout overview page', async function (this: CustomWorld) {
  expect(await this.checkoutPage.getTitle()).toBe(ExpectedMessages.checkoutStepTwoTitle);
});

When('I cancel the checkout overview', async function (this: CustomWorld) {
  await this.checkoutPage.cancel();
});

When('I finish the checkout', async function (this: CustomWorld) {
  await this.checkoutPage.finish();
});

Then('I should see the order confirmation message', async function (this: CustomWorld) {
  expect(await this.checkoutPage.getCompleteHeader()).toBe(ExpectedMessages.checkoutCompleteHeader);
});

When('I click the back home button', async function (this: CustomWorld) {
  await this.checkoutPage.backToProducts();
});
