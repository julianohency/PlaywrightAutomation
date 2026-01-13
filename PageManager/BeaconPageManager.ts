import { Page } from "@playwright/test";
import { BeaconLogin } from "./../PageObject/BeaconPageObject";

export class BeaconPageManager {
  private page: Page;
  private beaconloginpagelocators: BeaconLogin;

  constructor(page: Page) {
    this.page = page;
    this.beaconloginpagelocators = new BeaconLogin(this.page);
  }
  Beaconloginpagelocators() {
    return this.beaconloginpagelocators;
  }
}
