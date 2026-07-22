import { Page } from '@playwright/test';
import { MenuLocators } from '../locators/menu.locators';

export class MenuPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.click(MenuLocators.openMenuButton);
  }

  async close(): Promise<void> {
    await this.page.click(MenuLocators.closeMenuButton);
  }

  async goToAllItems(): Promise<void> {
    await this.page.click(MenuLocators.allItemsLink);
  }

  async goToAbout(): Promise<void> {
    await this.page.click(MenuLocators.aboutLink);
  }

  async logout(): Promise<void> {
    await this.page.click(MenuLocators.logoutLink);
  }

  async resetAppState(): Promise<void> {
    await this.page.click(MenuLocators.resetAppStateLink);
  }
}
