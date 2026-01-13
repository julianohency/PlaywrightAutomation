import { test } from "@playwright/test";
import { PageManager } from "./../PageManager/SamplePageManager";

test("Create Account", async ({ page }) => {
  const pageManager = new PageManager(page);
  const createpage = pageManager.Createlocators();
  const loginpage = pageManager.Loginpagelocators();

  // Step 1: Navigate to Login Page
  await loginpage.navigate();

  // Step 2: To Register an Account Click the Register Here
  await createpage.register.click();

  // Step 3: Enter First Name
  await createpage.firstName.fill("Activity2");

  // Step 4: Enter Last Name
  await createpage.lastName.fill("Sample");

  // Step 5: Enter Email
  await createpage.userEmail.fill("activity2_5@mailinator.com");

  // Step 6: Enter Phone Number
  await createpage.userMobile.fill("9234567891");

  // Step 7: Click Occupation
  await createpage.occupation.selectOption("3: Engineer");

  // Step 8: Enter Gender
  await createpage.gender.check();

  // Step 9: Enter Password
  await createpage.userPassword.fill("abcdE123");

  // Step 10: Enter Password Confirmation
  await createpage.confirmPassword.fill("abcdE123");

  // Step 11: Tick Checkbox for age confirmation
  await createpage.checkbox.check();

  // Step 12: Click the Register Button
  await createpage.login.click();

  // Step 13: Must Navigate to Account Created Succesfully
  await createpage.navigate();
});
