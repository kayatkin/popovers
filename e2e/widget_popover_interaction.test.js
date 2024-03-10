const puppeteer = require('puppeteer');

describe('Widget and Popover Interaction', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should toggle popover on button click', async () => {
    // Находим кнопку виджета
    const button = await page.waitForSelector('.widget-button');

    // Проверяем, что popover отсутствует перед кликом
    const popoverBeforeClick = await page.$('.popover-widget');
    expect(popoverBeforeClick).toBeNull();

    // Кликаем на кнопку
    await button.click();

    // Ждем появления popover после клика
    await page.waitForSelector('.popover-widget');

    // Проверяем, что popover появился
    const popoverAfterClick = await page.$('.popover-widget');
    expect(popoverAfterClick).not.toBeNull();

    // Кликаем еще раз на кнопку
    await button.click();

    // Ждем исчезновения popover после повторного клика
    await page.waitForSelector('.popover-widget', { hidden: true });

    // Проверяем, что popover исчез
    const popoverAfterSecondClick = await page.$('.popover-widget');
    expect(popoverAfterSecondClick).toBeNull();
  });
});
