import { test } from "@playwright/test";
import { PageManager } from "./../PageManager/SamplePageManager";

test("Login", async ({ page }) => {
  const pageManager = new PageManager(page);
  const loginpage = pageManager.Loginpagelocators();

  // Step 1: Navigate to Login Page
  await loginpage.navigate();

  // Step 2: Enter User Email
  await loginpage.userEmail.fill("activity2_1@mailinator.com");

  // Step 2: Enter User Password
  await loginpage.userPassword.fill("abcdE123");

  // Step 3: Click Login Button
  await loginpage.login.click();

  // Step 4: Must Navigate to Dashboard
  await loginpage.dashboard();
});
