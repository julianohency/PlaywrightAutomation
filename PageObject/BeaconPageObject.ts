import { Locator, Page, expect } from "@playwright/test";

export class BeaconLogin {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly login: Locator;
  readonly home: Locator;
  readonly loginassert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.login = page.locator("#btn-accounts-login");
    this.home = page.getByText("Home").first();
    this.loginassert = page.locator("p", { hasText: "Invalid login attempt." });
  }
  async NavLogin() {
    await this.page.goto(
      "https://beacon-accountweb-dev.azurewebsites.net/login"
    );
  }
  async AssertHome() {
    await expect(this.page).toHaveURL(
      "https://beacon-accountweb-dev.azurewebsites.net/home"
    );
    // await expect(this.home).toBeVisible();
  }
}
