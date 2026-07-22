import { Page } from '@playwright/test';
import { ProductDetailLocators } from '../locators/productDetail.locators';
import { ROUTES } from '../data/constants';

export class ProductDetailPage {
  constructor(private readonly page: Page) {}

  async getProductName(): Promise<string> {
    return (await this.page.textContent(ProductDetailLocators.productName)) ?? '';
  }

  async addToCart(): Promise<void> {
    await this.page.click(ProductDetailLocators.addToCartButton);
  }

  async removeFromCart(): Promise<void> {
    await this.page.click(ProductDetailLocators.removeButton);
  }

  async goBackToProducts(): Promise<void> {
    await this.page.click(ProductDetailLocators.backToProductsButton);
  }

  async isOnInventoryPage(): Promise<boolean> {
    return this.page.url().includes(ROUTES.INVENTORY);
  }
}
