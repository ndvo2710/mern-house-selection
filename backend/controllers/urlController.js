import { urlService } from '../services/index.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('urlController');

class urlController {
    static async createNewUrl(req, res) {
        logger.info('Calling /create-url');
        logger.info('create new url');
        logger.debug(`req.body: ${JSON.stringify(req.body)}`);
        logger.debug(`currentUrlDict: ${JSON.stringify(req.body.currentUrlDict)}`);
        // logger.debug(`try to decode URL: ${decodeURI(req.body.currentUrlDict.url)}`);
        try {
            const newUrl = await urlService.addNew(req.body.currentUrlDict);
            logger.info(`newUrl: ${newUrl}`);
            return res.status(200).send({
                success: newUrl
            });
        } catch (error) {
            logger.debug(error);
            logger.debug(`errorMessage: ${error.message}`);
            return res.status(500).send({
                error: error.message
            });
        }
    }
}

export default urlController;

