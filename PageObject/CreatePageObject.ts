import { Locator, Page, expect } from "@playwright/test";
export class Create {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userEmail: Locator;
  readonly userMobile: Locator;
  readonly userPassword: Locator;
  readonly confirmPassword: Locator;
  readonly login: Locator;
  readonly register: Locator;
  readonly occupation: Locator;
  readonly gender: Locator;
  readonly checkbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.userEmail = page.locator("#userEmail");
    this.userMobile = page.locator("#userMobile");
    this.userPassword = page.locator("#userPassword");
    this.confirmPassword = page.locator("#confirmPassword");
    this.login = page.locator("#login");
    this.register = page.getByText("Register here");
    this.occupation = page.getByRole("combobox");
    this.gender = page.getByRole("radio", { name: "Female" });
    this.checkbox = page.getByRole("checkbox");
  }
  async navigate() {
    await expect(this.page).toHaveURL(
      "https://rahulshettyacademy.com/client/#/auth/register"
    );
  }
}
