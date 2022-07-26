// This function can be used for getting HTML of dynamic SPAs after they fully finish loading.
(async function main() {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(url, { waitUntil: 'networkidle0' });
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    console.log(data);

    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
