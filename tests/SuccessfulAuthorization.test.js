const { test, expect } = require("@playwright/test");
const { email, password } = require("../user.js");

test("Successful Autorization", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");

    await page.getByPlaceholder('Email').fill(email);

    await page.getByPlaceholder('Пароль').fill(password);

    await page.getByTestId('login-submit-btn').click();

    await expect(page).toHaveURL("https://netology.ru/profile/7229773");
    
    const message = await page.waitForSelector(
        "h2.src-components-pages-Profile-Programs--title--Kw5NH"
      );
      expect(await message.textContent()).toContain("Моё обучение");
  });
   
