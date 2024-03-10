import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false, // Запускать в headless режиме
      slowMo: 100, // Замедлить действия на 100 миллисекунд
      devtools: true // Открыть devtools
    });

    page = await browser.newPage();
  });

  test('start page', async () => {
    await page.goto('http://localhost:9000'); // Переход на стартовую страницу

    await page.waitForSelector('body'); // Ожидание загрузки элемента body
  });

  afterAll(async () => {
    await browser.close();
  })
})
