import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('pageScraper');


// autoScroll source: https://github.com/chenxiaochun/blog/issues/38;
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 10);
        });
    });
}


class pageScraper {
    static async scraper(browser, url) {

        let newPage = await browser.newPage();
        await newPage.goto(url, { waitUntil: "domcontentloaded", timeout: 300000 });
        await newPage.waitForSelector('.ds-home-details-chip');

        const priceHomeDetails = await newPage.evaluate(() => {
            return document.querySelector('.ds-summary-row-content').textContent
        });
        let details = await newPage.evaluate(() => {
            return document.querySelector('.ds-bed-bath-living-area-header').textContent
        });
        let price = priceHomeDetails.replace(details, '').replace(/\$|,/g, '').trim();
        price = price.match(/\d+/g);
        price = price[0];

        // image-carousel-entry--selected
        let imageLink = await newPage.evaluate(() => {
            return document.querySelectorAll('.media-stream-tile img')[0].src;
        })
        imageLink = encodeURI(imageLink);


        const address = await newPage.evaluate(() => {
            return document.querySelector('.ds-price-change-address-row').textContent
        });
        const status = await newPage.evaluate(() => {
            return document.querySelector('.ds-status-details').textContent
        });
        let monthlyMortgage = await newPage.evaluate(() => {
            return document.querySelector('.ds-mortgage-row').textContent
        });

        details = details.replace('bd', 'bd | ').replace('ba', 'ba | ');
        monthlyMortgage = monthlyMortgage.replace(
            'Est. payment:', ''
        ).replace(
            '/moGet pre-qualified', ''
        ).replace(/\$|,/g, '').trim();

        logger.info('price: ', price)
        logger.info('details: ', details);
        logger.info('address: ', address);
        logger.info('status: ', status);
        logger.info('imageLink: ', imageLink);
        logger.info('monthlyMortgage: ', monthlyMortgage);
        await newPage.close();

        return {
            price: parseInt(price),
            details,
            url: encodeURI(url),
            imageLink,
            address,
            status,
            monthlyMortgage
        };
    }
}

export default pageScraper;