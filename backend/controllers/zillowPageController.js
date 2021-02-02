import { zillowPageService } from '../services/index.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('zillowPageController');

class zillowController {
    static async createNewZillowPage(req, res) {
        logger.info('Calling /zillow-page');
        logger.info('create new ds');
        logger.debug(`req.body:\n${JSON.stringify(req.body, null, 2)}`);
        logger.debug(`zillowPageDict:\n${JSON.stringify(req.body.zillowPageDict, null, 2)}`);
        try {
            const newZillowPage = await zillowPageService.addNew(req.body.zillowPageDict);
            logger.info(`newZillowPage: ${newZillowPage}`);
            return res.status(200).send({
                success: newZillowPage
            });
        } catch (error) {
            logger.debug(error);
            logger.debug(`errorMessage: ${error.message}`);
            return res.status(500).send({
                error: error.message
            });
        }
    }

    static async fetchAllPagesByDs(req, res) {
        logger.info('GET /fetch-zillow/:ds');
        logger.debug(`req.params:\n${JSON.stringify(req.params, null, 2)}`);
        logger.debug(`req.params.ds:\n${JSON.stringify(req.params.ds, null, 2)}`);
        try {
            const zillowPages = await zillowPageService.fetchDataByDs(req.params.ds);
            return res.status(200).send({
                success: zillowPages
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

export default zillowController;