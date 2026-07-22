import { Page } from '@playwright/test';
import { CheckoutLocators } from '../locators/checkout.locators';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async getTitle(): Promise<string> {
    return (await this.page.textContent(CheckoutLocators.pageTitle)) ?? '';
  }

  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.fill(CheckoutLocators.firstNameInput, firstName);
    await this.page.fill(CheckoutLocators.lastNameInput, lastName);
    await this.page.fill(CheckoutLocators.postalCodeInput, postalCode);
  }

  async continueToOverview(): Promise<void> {
    await this.page.click(CheckoutLocators.continueButton);
  }

  async cancel(): Promise<void> {
    await this.page.click(CheckoutLocators.cancelButton);
  }

  async getErrorMessage(): Promise<string> {
    return (await this.page.textContent(CheckoutLocators.errorMessage)) ?? '';
  }

  async getTotalLabel(): Promise<string> {
    return (await this.page.textContent(CheckoutLocators.summaryTotalLabel)) ?? '';
  }

  async finish(): Promise<void> {
    await this.page.click(CheckoutLocators.finishButton);
  }

  async getCompleteHeader(): Promise<string> {
    return (await this.page.textContent(CheckoutLocators.completeHeader)) ?? '';
  }

  async backToProducts(): Promise<void> {
    await this.page.click(CheckoutLocators.backToProductsButton);
  }
}
