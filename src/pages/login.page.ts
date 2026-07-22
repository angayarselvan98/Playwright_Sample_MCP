import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';
import { ENV, ROUTES } from '../data/constants';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(`${ENV.BASE_URL}${ROUTES.LOGIN}`);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.fill(LoginLocators.usernameInput, username);
    await this.page.fill(LoginLocators.passwordInput, password);
    await this.page.click(LoginLocators.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return (await this.page.textContent(LoginLocators.errorMessage)) ?? '';
  }

  async getInventoryTitle(): Promise<string> {
    return (await this.page.textContent(LoginLocators.inventoryTitle)) ?? '';
  }

  async isOnInventoryPage(): Promise<boolean> {
    return this.page.url().includes(ROUTES.INVENTORY);
  }
}
