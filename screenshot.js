const puppeteer = require('puppeteer');

const url = process.argv[2];
if (!url) {
    throw "Please provide a URL as the first argument";
}
const fileName = process.argv[3] || 'screenshot';

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: fileName + '.jpg'});
    browser.close();
}
run();