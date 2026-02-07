import { test, expect } from '@playwright/test';

test('portfolio landing page verification', async ({ page }) => {
    // Navigate to the local dev server
    await page.goto('/');

    // Check for the main title (Landing component)
    await expect(page.locator('h1')).toContainText('ARYAN');

    // Check for the "About" section title
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
    await expect(aboutSection).toContainText('About Me');

    // Check for navigation links
    const navbar = page.locator('.header');
    await expect(navbar).toBeVisible();
    await expect(navbar.locator('a[href="#about"]')).toBeVisible();
    await expect(navbar.locator('a[href="#work"]')).toBeVisible();
    await expect(navbar.locator('a[href="#contact"]')).toBeVisible();

    // Scroll to Projects/Work section and verify visibility
    const workSection = page.locator('#work');
    await workSection.scrollIntoViewIfNeeded();
    await expect(workSection).toBeVisible();
    await expect(workSection.locator('h2')).toContainText('My');

    console.log('Verification passed: Landing, About, Navbar, and Work sections are visible.');
});
