const { test } = require('@playwright/test');

test('Sinhala Transliteration Automation', async ({ page }) => {

  await page.goto('https://www.pixelssuite.com/chat-translator');

  const inputBox = page.locator('textarea[placeholder*="English"]');
  const outputBox = page.locator('textarea[placeholder*="Sinhala"]');
  const button = page.getByRole('button', { name: 'Transliterate' });

  await inputBox.waitFor({ state: 'visible' });

  const testCases = [
    { id: "Neg_0001", input: "oyata kohomada?", expected: "ඔයාට කොහොමද?" },
    { id: "Neg_0002", input: "mata dukai 😢", expected: "මට දුකයි 😢" },
    { id: "Neg_0003", input: "oya kawadda enna inne?", expected: "ඔයා කවද්ද එන්න ඉන්නේ?" },
    { id: "Neg_0004", input: "amma kiwwa enna kiyala", expected: "අම්මා කිව්වා එන්න කියලා" },
    { id: "Neg_0005", input: "karunakara mata denna", expected: "කරුණාකර මට දෙන්න" }
  ];

  for (const tc of testCases) {

    // clear input
    await inputBox.fill('');

    // type input
    await inputBox.fill(tc.input);

    // wait until button is clickable
    await button.waitFor({ state: 'visible' });

    // store previous output
    const prevOutput = await outputBox.inputValue();

    // click button
    await button.click();

    // wait until output changes
    await page.waitForFunction(
      (prev) => {
        const el = document.querySelector('textarea[placeholder*="Sinhala"]');
        return el && el.value !== prev;
      },
      prevOutput
    );

    const actual = await outputBox.inputValue();

    let status = "Pass";
    if (actual.trim() !== tc.expected.trim()) {
      status = "Fail";
    }

    console.log(`\nTest Case: ${tc.id}`);
    console.log("Input:", tc.input);
    console.log("Expected:", tc.expected);
    console.log("Actual:", actual);
    console.log("Status:", status);

    // delay to prevent UI overload
    await page.waitForTimeout(800);
  }

});