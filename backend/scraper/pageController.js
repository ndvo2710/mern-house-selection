import * as logging from '../utils/loggingUtils.js';
import pageScraper from './pageScraper.js';

const logger = logging.getLogger('pageController')


class pageScraperController {
    static async scrapeAll(browserObject, url) {

        logger.info('pageController url: ', url);

        let browser;

        try {
            //Start the browser and create a browser instance
            browser = await browserObject.startBrowser();
            const eachPageData = await pageScraper.scraper(browser, url);
            logger.info(eachPageData);

            await browser.disconnect();
            await browser.close();
            return eachPageData
            // await new Promise(resolve => setTimeout(resolve, 5000));
        }
        catch (err) {
            logger.debug("Could not resolve the browser instance => ", err);
        }
    }
}

export default pageScraperController;
