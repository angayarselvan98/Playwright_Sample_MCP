import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { MenuPage } from '../pages/menu.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { ProductDetailPage } from '../pages/productDetail.page';
import { LoginTestData } from '../data/testData';
import { ROUTES } from '../data/constants';

Given('I am logged in as a standard user', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.menuPage = new MenuPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
  this.productDetailPage = new ProductDetailPage(this.page);

  await this.loginPage.goto();
  await this.loginPage.login(LoginTestData.validUser.username, LoginTestData.validUser.password);
});

Given('I have added {string} to the cart', async function (this: CustomWorld, productName: string) {
  await this.inventoryPage.addItemToCartByName(productName);
});

Given('I go to the cart page', async function (this: CustomWorld) {
  await this.inventoryPage.goToCart();
});

When('I proceed to checkout', async function (this: CustomWorld) {
  await this.cartPage.checkout();
});

Then('the cart badge should show {string}', async function (this: CustomWorld, count: string) {
  expect(await this.inventoryPage.getCartBadgeCount()).toBe(count);
});

Then('the cart badge should not be visible', async function (this: CustomWorld) {
  expect(await this.inventoryPage.isCartBadgeVisible()).toBeFalsy();
});

Then('I should be redirected to the login page', async function (this: CustomWorld) {
  await this.page.waitForURL((url) => url.toString().endsWith(ROUTES.LOGIN));
  expect(await this.page.isVisible('#login-button')).toBeTruthy();
});

When('I open the hamburger menu', async function (this: CustomWorld) {
  await this.menuPage.open();
});

When('I close the hamburger menu', async function (this: CustomWorld) {
  await this.menuPage.close();
});

Then('the menu should be visible', async function (this: CustomWorld) {
  await expect(this.page.locator('.bm-menu-wrap')).toHaveAttribute('aria-hidden', 'false');
});

Then('the menu should not be visible', async function (this: CustomWorld) {
  await expect(this.page.locator('.bm-menu-wrap')).toHaveAttribute('aria-hidden', 'true');
});

When('I click the All Items link', async function (this: CustomWorld) {
  await this.menuPage.goToAllItems();
});

When('I click the About link', async function (this: CustomWorld) {
  await this.menuPage.goToAbout();
});

When('I click Reset App State', async function (this: CustomWorld) {
  await this.menuPage.resetAppState();
});

When('I click Logout', async function (this: CustomWorld) {
  await this.menuPage.logout();
});

Then('I should be redirected to the Sauce Labs website', async function (this: CustomWorld) {
  await this.page.waitForURL((url) => url.toString().includes('saucelabs.com'));
  expect(this.page.url()).toContain('saucelabs.com');
});
