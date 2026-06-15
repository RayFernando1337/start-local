const { test, expect } = require("@playwright/test");

const viewports = [
  { name: "mobile390", width: 390, height: 844 },
  { name: "mobile430", width: 430, height: 932 },
  { name: "desktop", width: 1440, height: 1000 },
];
const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";

for (const viewport of viewports) {
  test(`${viewport.name} layout and navigation`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(baseUrl, { waitUntil: "networkidle" });

    await expect(page).toHaveTitle(/Start Local/);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);

    await page.locator("#troubleshooting").scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);

    if (viewport.width < 1320) {
      await expect(page.locator("#toc-fab")).toBeVisible();
      await expect(page.locator("#toc-current")).toContainText(/Fixes|When to graduate|Glossary|Sources/);
      await page.locator("#toc-fab").click();
      await expect(page.locator("#toc-overlay")).toHaveClass(/open/);
      await page.keyboard.press("Escape");
      await expect(page.locator("#toc-overlay")).not.toHaveClass(/open/);
    } else {
      await expect(page.locator(".chapter-rail")).toBeVisible();
    }
  });
}

test("platform toggle updates command blocks", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await page.locator('[data-platform-choice="mac"]').click();
  await expect(page.locator("#main-command")).toContainText("~/Models");
  await expect(page.locator("#client-command")).toContainText("export OPENAI_BASE_URL");

  await page.locator('[data-platform-choice="windows"]').click();
  await expect(page.locator("#main-command")).toContainText("C:\\models");
  await expect(page.locator("#client-command")).toContainText("set OPENAI_BASE_URL");
});
