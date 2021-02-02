import MongoConnectAsync from '../config/connectDB.js';
import { urlService, zillowPageService } from '../services/index.js';
import * as logging from '../utils/loggingUtils.js';
import browserObject from './browser.js';
import pageScraperController from './pageController.js';


const logger = logging.getLogger('scraper Main')


async function scrapAndFetchMongo() {
    try {
        await MongoConnectAsync.connectDB();
        const urls = await urlService.fetchUrlsNotDone();
        for (const url of urls) {
            logger.info(`Before Update: ${JSON.stringify(url, null, 2)}`);
            const pageData = await pageScraperController.scrapeAll(browserObject, url.url);
            pageData['ds'] = url.ds;
            await zillowPageService.addNew(pageData);
            await urlService.markDoneUrl(url);
        }
    } catch (err) {
        logger.info('Error. Uncomment to see error ');
        logger.info('Error: ', err);
    } finally {
        await MongoConnectAsync.disconnectDB();
        logger.info('Job Done!');
    }

};

scrapAndFetchMongo();