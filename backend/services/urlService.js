import urlSchema from '../models/urlModel.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('dsService');


class urlService {
    static async addNew(currentUrlDict) {
        const urlExist = await urlSchema.checkExists(currentUrlDict);
        if (urlExist) {
            throw new Error('Ds already existed');
        }
        const newUrl = await urlSchema.createNew(currentUrlDict);
        return newUrl
    }
}


export default urlService;