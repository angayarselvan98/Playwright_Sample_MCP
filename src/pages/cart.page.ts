import { Page } from '@playwright/test';
import { CartLocators } from '../locators/cart.locators';
import { ROUTES } from '../data/constants';

export class CartPage {
  constructor(private readonly page: Page) {}

  async getTitle(): Promise<string> {
    return (await this.page.textContent(CartLocators.pageTitle)) ?? '';
  }

  async getItemCount(): Promise<number> {
    return this.page.locator(CartLocators.cartItem).count();
  }

  async getItemNames(): Promise<string[]> {
    return this.page.locator(CartLocators.cartItemName).allTextContents();
  }

  async removeItemByName(name: string): Promise<void> {
    const item = this.page.locator(CartLocators.cartItem).filter({ hasText: name });
    await item.locator(CartLocators.removeButton).click();
  }

  async continueShopping(): Promise<void> {
    await this.page.click(CartLocators.continueShoppingButton);
  }

  async isOnInventoryPage(): Promise<boolean> {
    return this.page.url().includes(ROUTES.INVENTORY);
  }

  async checkout(): Promise<void> {
    await this.page.click(CartLocators.checkoutButton);
  }
}
