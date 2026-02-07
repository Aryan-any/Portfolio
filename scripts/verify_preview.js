import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let server;

(async () => {
    try {
        console.log('Launching browser for PREVIEW check...');
        const browser = await chromium.launch();
        const page = await browser.newPage();

        const logStream = fs.createWriteStream(path.join(__dirname, 'preview_logs.txt'), { flags: 'w' });

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

        // Start the preview server
        console.log('Starting preview server on port 4444...');
        server = spawn('npm', ['run', 'preview', '--', '--port', '4444'], { stdio: 'pipe', shell: true });

        const previewUrl = 'http://localhost:4444';

        server.stdout.on('data', (data) => {
            console.log(`SERVER OUT: ${data}`);
            logStream.write(`SERVER OUT: ${data}\n`);
        });

        server.stderr.on('data', (data) => {
            console.error(`SERVER ERR: ${data}`);
            logStream.write(`SERVER ERR: ${data}\n`);
        });
        server.on('close', (code) => {
            console.log(`SERVER exited with code ${code}`);
            logStream.write(`SERVER exited with code ${code}\n`);
        });

        // Give the server some time to start up
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds for server to be ready

        console.log(`Navigating to ${previewUrl}...`);
        await page.goto(previewUrl, { timeout: 60000 });

        console.log('Waiting for loading to finish...');
        // Wait for Loading component to disappear
        try {
            await page.waitForSelector('.main-body', { state: 'visible', timeout: 10000 });
            console.log('✅ Main content visible');
        } catch (e) {
            console.log('❌ Main content NOT visible (Loading likely stuck)');
        }

        console.log('Taking preview screenshot (Hero)...');
        await page.screenshot({ path: 'preview_verification_hero.png', fullPage: false });

        console.log('Scrolling to Tech Stack...');
        await page.evaluate(() => {
            const techStack = document.querySelector('.techstack-new');
            if (techStack) techStack.scrollIntoView();
        });
        await page.waitForTimeout(2000); // Wait for scroll and animations
        await page.screenshot({ path: 'preview_verification_techstack.png', fullPage: false });

        await browser.close();
        logStream.end();
    } catch (error) {
        console.error('Preview verification FAILED:', error);
        process.exit(1);
    }
})();
