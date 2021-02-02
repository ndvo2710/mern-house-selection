import zillowSchema from '../models/zillowPageModel.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('zillowPageService');


class zillowPageService {
    static async addNew(currentPageDict) {
        const pageExist = await zillowSchema.checkExists(currentPageDict);
        if (pageExist) {
            throw new Error('Page already existed');
        }
        const newZillowPage = await zillowSchema.createNew(currentPageDict);
        return newZillowPage
    }

    static async fetchDataByDs(ds) {
        const zillowPages = await zillowSchema.getItemsByDs(ds);
        logger.info('zillowPages: ', zillowPages);
        return zillowPages
    }
}


export default zillowPageService;