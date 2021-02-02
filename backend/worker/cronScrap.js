import cron from 'node-cron';
import scrapAndFetchMongo from '../scraper/index.js';
import * as logging from '../utils/loggingUtils.js';


const logger = logging.getLogger('cron Job');

const task = cron.schedule('* * * * *', () => {
    logger.info('At every 3rd minute from 0 through 59.');
    scrapAndFetchMongo();
});

task.start();