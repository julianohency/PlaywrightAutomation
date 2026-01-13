import { Locator, Page, expect } from "@playwright/test";
export class Login {
  readonly page: Page;
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly login: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userEmail = page.locator("#userEmail");
    this.userPassword = page.locator("#userPassword");
    this.login = page.locator("#login");
  }
  async navigate() {
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  }
  async dashboard() {
    await expect(this.page).toHaveURL(
      "https://rahulshettyacademy.com/client/#/dashboard/dash"
    );
  }
}
