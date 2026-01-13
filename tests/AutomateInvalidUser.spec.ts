import { test, expect } from "@playwright/test";
import { BeaconLogin } from "../PageObject/BeaconPageObject";

test("Login - Invalid User", async ({ page }) => {
  const loginpage = new BeaconLogin(page);

  // Step 1: Navigate to Login Page
  await loginpage.NavLogin();

  // Step 2: Enter Invalid User Name
  await loginpage.email.fill("FacilityGroup@mailinator.com");

  // Step 3: Enter Invalid Password
  await loginpage.password.fill("abcdE@1234");

  // Step 3: Click Login Button
  await loginpage.login.click();

  // Step 5: Verifying Invalid Login Ateemp --Assertion or Expected Result
  await expect(loginpage.loginassert).toHaveText("Invalid login attempt.");
});
