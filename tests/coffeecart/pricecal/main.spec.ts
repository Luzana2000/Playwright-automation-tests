import { test, expect } from '@playwright/test';
/*TC01*/ /**/ 
test('Verify the total price once buy one coffee', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('//div[@aria-label="Cafe Latte"]').click();
  const latteDollar = await page.locator('//h4[(text()="Cafe Latte ")]/small').textContent();
  /*console.log("1" + latteDollar)*/
  const match1 = latteDollar?.match(/\$(\d+)/)
  if (match1) {
    const lattePrice = match1[1];
     /*console.log("2" + lattePrice)*/ 
    await page.locator('//a[@aria-label="Cart page"]').click();
    const totalDollar = await page.locator('//button[@aria-label="Proceed to checkout"]').textContent();
    /*console.log("3" + totalDollar)*/
    const match2 = totalDollar?.match(/\$(\d+)/)
    if (match2) {
      const totalPrice = match2[1];
      /*console.log("4" + totalPrice)*/ 
      expect(lattePrice).toEqual(totalPrice)
    }
  }
});


/*TC02*/
test('Verify the total price once buy three coffee', async ({ page }) => {
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
})


/*TC03*/
test('Verify the total price once buy the same kind of coffee 2 unit', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('//div[@aria-label="Americano"]').click();
  const americanoDoller = await page.locator('//h4[contains(text(),"Americano")]/small').textContent();
  const match1 = americanoDoller?.match(/\$(\d+)/);
  if (match1) {
    const americanoPrice = match1[1];
  
  await page.locator('//a[@aria-label="Cart page"]').click();
  await page.locator('//div[1]/button[@aria-label="Add one Americano"]').click();
  const totalDollar = await page.locator('//button[@aria-label="Proceed to checkout"]').textContent();
  const match2 = totalDollar?.match(/\$(\d+)/);
  if (match2) {
    const totalPrice = match2[1];
    const twoAmericanoprice = (Number(americanoPrice) *2)
    expect(twoAmericanoprice).toEqual(Number(totalPrice));
    }
  }
})


/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
