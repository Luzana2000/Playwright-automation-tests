import { test, expect } from '@playwright/test';
/*TC02*/
/*test('Verify the total price once buy three coffee', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.locator('//div[@aria-label="Mocha"]').click();
    const mochaDollar =  await page.locator('//h4[contains(text(),"Mocha")]/small').textContent();
    const match1 = mochaDollar?.match(/\$(\d+)/);
    if (match1) {
      const mochaPrice = match1[1];

      await page.locator('//div[@aria-label="Flat White"]').click();
      const flatwhiteDollar = await page.locator('//h4[contains(text(),"Flat White")]/small').textContent();
      const match2 = flatwhiteDollar?.match(/\$(\d+)/);
      if (match2) {
        const flatwhitePrice = match2[1];

        await page.locator('//div[@aria-label="Cappuccino"]').click();
        const cappuccinoDollar = await page.locator('//h4[contains(text(),"Cappuccino")]/small').textContent();
        const match3 = cappuccinoDollar?.match(/\$(\d+)/);
        if (match3) {
          const cappuccinoPrice = match3[1];

          await page.locator('//a[@aria-label="Cart page"]').click();
          const totalDollar = await page.locator('//button[@aria-label="Proceed to checkout"]').textContent();
          const match4 = totalDollar?.match(/\$(\d+)/);
          if (match4) {
            const totalPrice = match4[1];
            const totalPriceSelection = (Number(mochaPrice)+Number(flatwhitePrice)+Number(cappuccinoPrice))
            expect(totalPriceSelection).toEqual(Number(totalPrice));
          }
        }
      }
    }
})*/


test('Verify When select 2 product and  go cart page click remove item and check ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();

    await page.locator('//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    const saucelabsbolttshirtDollar = await page.locator('//*[@id="inventory_container"]//div[3]/div[2]/div[2]/div[@class="inventory_item_price"]').textContent();
    const match1 = saucelabsbolttshirtDollar?.match(/\$(\d+)/);
    if (match1) {
        const saucelabsbolttshirtPrice = match1[1];

        await page.locator('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
        const saucelabsfleecejacketDollar = await page.locator('//*[@id="inventory_container"]//div[4]/div[2]/div[2]/div[@class="inventory_item_price"]').textContent();
        const match2 = saucelabsfleecejacketDollar?.match(/\$(\d+)/);
        if (match2) {
            const saucelabsfleecejacketPrice = match2[1];

            await page.locator('//a[@data-test="shopping-cart-link"]').click();
            await page.locator('//button[@id="remove-sauce-labs-fleece-jacket"]').click();
            await page.getByRole('button', { name: 'Checkout' }).click();
            await page.locator('//input[@id="first-name"]').fill('PlaywirghtTest');
            await page.locator('//input[@id="last-name"]').fill('Tests');
            await page.locator('//input[@id="postal-code"]').fill('12345');
            await page.locator('//input[@id="continue"]').click();
                const totalDollar = await page.locator('//button[@data-test="finish"]').textContent();
                const match3 = totalDollar?.match(/\$(\d+)/);
                if (match3) {
                const totalPrice = match3[1];
                const totalPriceSelection = (Number(saucelabsbolttshirtPrice)+Number(saucelabsfleecejacketPrice))
                expect(totalPriceSelection).toEqual(Number(totalPrice));
            }
        }
    }
})