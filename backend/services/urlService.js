import urlSchema from '../models/urlModel.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('dsService');


class urlService {
    static async addNew(currentUrl) {
        const urlExist = await urlSchema.checkExists(currentUrl);
        if (urlExist) {
            throw new Error('URL already existed');
        }
        const newUrl = await urlSchema.createNew(currentUrl);
        return newUrl
    }

    static async fetchUrlsNotDone() {
        const urls = await urlSchema.findAllUrlsNotDone();
        logger.info(`url: ${JSON.stringify(urls)}`);
        if (urls === undefined || urls.length === 0) {
            logger.info('There is no new url');
            return []
        } else {
            return urls
        }
    }

    static async markDoneUrl(currentUrl) {
        const updatedUrl = await urlSchema.updateStatusDone(currentUrl);
        return updatedUrl
    }
}


export default urlService;