import puppeteer from 'puppeteer';

describe('e2e', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('home', async () => {
    const actual = await page.evaluate(() => document.body.innerText);
    expect(actual).toBe('OK');
  })
});
