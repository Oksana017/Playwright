const { test, expect } = require("@playwright/test");
const { invalidEmail, invalidPassword } = require("../user.js");

test("Unsuccessful Autorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.getByPlaceholder('Email').fill(invalidEmail);

  await page.getByPlaceholder('Пароль').fill(invalidPassword);

  await page.getByTestId('login-submit-btn').click();

  await page.getByTestId('login-error-hint').click();

  const error = await page.waitForSelector(
    "[data-testid='login-error-hint']"
  );
  expect(await error.textContent()).toContain("Вы ввели неправильно логин или пароль");
});
  