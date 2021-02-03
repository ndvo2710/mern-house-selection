import cron from 'node-cron';
import scrapAndFetchMongo from '../scraper/index.js';
import * as logging from '../utils/loggingUtils.js';


const logger = logging.getLogger('cron Job');

const task = cron.schedule('* * * * *', () => {
    logger.info('Run every minute');
    scrapAndFetchMongo();
});

task.start();