import * as logging from '../utils/loggingUtils.js';
import browserObject from './browser.js';
import pageScraperController from './pageController.js';

const logger = logging.getLogger('scraper Main')


async function scrapAndFetchMongo(url) {

    try {
        // await (connectDB)();
        await pageScraperController.scrapeAll(browserObject, url);
        // await mongoose.disconnect();
    } catch (err) {
        logger.info('Error. Uncomment to see error ');
        // logger.info('Error: ', err);
    } finally {
        logger.info('Job Done!');
    }

};

export default scrapAndFetchMongo;