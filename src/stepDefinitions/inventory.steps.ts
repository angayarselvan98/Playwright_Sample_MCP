import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('I should see {int} products listed', async function (this: CustomWorld, count: number) {
  expect(await this.inventoryPage.getItemCount()).toBe(count);
});

When('I sort products by {string}', async function (this: CustomWorld, option: string) {
  await this.inventoryPage.sortBy(option);
});

Then('the products should be sorted in {string} order', async function (this: CustomWorld, order: string) {
  if (order === 'name_ascending' || order === 'name_descending') {
    const names = await this.inventoryPage.getAllItemNames();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    if (order === 'name_descending') sorted.reverse();
    expect(names).toEqual(sorted);
  } else {
    const prices = await this.inventoryPage.getAllItemPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    if (order === 'price_descending') sorted.reverse();
    expect(prices).toEqual(sorted);
  }
});

When('I add {string} to the cart', async function (this: CustomWorld, productName: string) {
  await this.inventoryPage.addItemToCartByName(productName);
});

When('I remove {string} from the cart', async function (this: CustomWorld, productName: string) {
  await this.inventoryPage.removeItemFromCartByName(productName);
});
