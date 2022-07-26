/* 
This function can be used for getting HTML of dynamic SPAs after they fully finish loading.

Sources: 
https://stackoverflow.com/questions/68005766/node-fetch-not-providing-all-html-from-a-page-in-body
https://stackoverflow.com/questions/54563410/how-to-get-all-html-data-after-all-scripts-and-page-loading-is-done-puppeteer/60617981#60617981
*/
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
