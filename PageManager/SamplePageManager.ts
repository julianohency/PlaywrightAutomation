import { Page } from "@playwright/test";
import { Login } from "./../PageObject/SamplePageObject";
import { Create } from "./../PageObject/CreatePageObject";              
 
export class PageManager {
  private page: Page;
  private loginpagelocators: Login;
  private createlocators: Create;

 
  constructor(page: Page) {
    this.page = page;
    this.loginpagelocators = new Login(this.page);
    this.createlocators = new Create(this.page);
  };

  Loginpagelocators() {
    return this.loginpagelocators;
  }
  Createlocators() {
    return this.createlocators;
  }
};