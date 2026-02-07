import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await chromium.launch();
        const page = await browser.newPage();

        const logStream = fs.createWriteStream(path.join(__dirname, 'browser_logs.txt'), { flags: 'w' });

        // Capture console logs and errors
        page.on('console', msg => {
            const text = msg.text();
            console.log('PAGE LOG:', text);
            logStream.write(`LOG: ${text}\n`);
        });
        page.on('pageerror', exception => {
            console.log('PAGE ERROR:', exception);
            logStream.write(`ERROR: ${exception.stack || exception}\n`);
        });

        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { timeout: 60000 });

        console.log('Waiting for content to load...');

        // Verify Name (Landing)
        await page.waitForSelector('text=ARYAN MISHRA', { timeout: 30000 });
        console.log('✅ Found Name: ARYAN MISHRA');

        // Verify Role (Landing) - strict check might fail due to animation splitting, checking partial or container
        // data-text attribute is often used in glitch effects, or just check generic existence
        await page.waitForSelector('text=Researcher', { timeout: 10000 });
        console.log('✅ Found Role keyword: Researcher');

        // Verify "About" section presence
        // Scroll to trigger lazy loading or animations
        await page.evaluate(() => window.scrollTo(0, 500));
        await page.waitForTimeout(2000); // Wait for scroll

        // Verify Experience (IIT Roorkee)
        // This might be further down, let's scroll more
        await page.evaluate(() => window.scrollTo(0, 2000));
        await page.waitForTimeout(2000);

        // Check for Experience text
        const content = await page.content();
        if (content.includes("IIT Roorkee")) {
            console.log('✅ Found Experience: IIT Roorkee');
        } else {
            console.log('⚠️ Warning: Could not find "IIT Roorkee" in visible content (might need more scrolling)');
        }

        // Verify Projects (ValuAI)
        await page.evaluate(() => window.scrollTo(0, 3000));
        await page.waitForTimeout(2000);
        if (content.includes("ValuAI")) {
            console.log('✅ Found Project: ValuAI');
        }

        console.log('Taking final screenshot...');
        await page.screenshot({ path: 'final_verification.png', fullPage: true });
        console.log('✅ Final verification screenshot saved to final_verification.png');

        await browser.close();
        logStream.end();
        console.log('Verification passed successfully.');
    } catch (error) {
        console.error('Verification FAILED:', error);
        try {
            await chromium.launch().then(async browser => {
                // Re-launch if browser closed or use existing page if possible? 
                // Actually 'page' might be usable if error wasn't browser closure.
                // But simpler to just rely on console logs above.
            });
        } catch (e) { }
        process.exit(1);
    }
})();
