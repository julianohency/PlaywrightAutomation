import { test, expect } from "@playwright/test";
import { BeaconLogin } from "../PageObject/BeaconPageObject";

test("Login - Valid User", async ({ page }) => {
  const loginpage = new BeaconLogin(page);

  // Step 1: Navigate to Login Page
  await loginpage.NavLogin();

  // Step 2: Enter Valid User Namebeacon
  await loginpage.email.fill("FacilityGroup@mailinator.com");

  // Step 3: Enter Valid Password
  await loginpage.password.fill("abcdE@1234");

  // Step 3: Click Login Button
  await loginpage.login.click();

  // Step 5: Navigate to Home Page --Assertion or Expected Result
  await loginpage.AssertHome();
});
