import { Page } from '@playwright/test';
import { InventoryLocators } from '../locators/inventory.locators';

export class InventoryPage {
  constructor(private readonly page: Page) {}
  

  async getTitle(): Promise<string> {
    return (await this.page.textContent(InventoryLocators.pageTitle)) ?? '';
  }

  async getItemCount(): Promise<number> {
    return this.page.locator(InventoryLocators.inventoryItem).count();
  }

  async sortBy(option: string): Promise<void> {
    await this.page.selectOption(InventoryLocators.sortDropdown, option);
  }

  async getAllItemNames(): Promise<string[]> {
    return this.page.locator(InventoryLocators.inventoryItemName).allTextContents();
  }

  async getAllItemPrices(): Promise<number[]> {
    const prices = await this.page.locator(InventoryLocators.inventoryItemPrice).allTextContents();
    return prices.map((price) => Number(price.replace('$', '')));
  }

  async addItemToCartByName(name: string): Promise<void> {
    const item = this.page.locator(InventoryLocators.inventoryItem).filter({ hasText: name });
    await item.locator(InventoryLocators.addToCartButton).click();
  }

  async removeItemFromCartByName(name: string): Promise<void> {
    const item = this.page.locator(InventoryLocators.inventoryItem).filter({ hasText: name });
    await item.locator(InventoryLocators.removeButton).click();
  }

  async openProductByName(name: string): Promise<void> {
    await this.page.locator(InventoryLocators.inventoryItemName, { hasText: name }).click();
  }

  async getCartBadgeCount(): Promise<string> {
    return (await this.page.textContent(InventoryLocators.cartBadge)) ?? '0';
  }

  async isCartBadgeVisible(): Promise<boolean> {
    return this.page.locator(InventoryLocators.cartBadge).isVisible();
  }

  async goToCart(): Promise<void> {
    await this.page.click(InventoryLocators.cartLink);
  }
}
