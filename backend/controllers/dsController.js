import { dsService } from '../services/index.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('dsController');

export const createNewDS = async (req, res) => {
    logger.info('Calling /create-ds');
    logger.info('create new ds');
    logger.debug(`req.body: ${JSON.stringify(req.body)}`);
    logger.debug(`currentDs: ${JSON.stringify(req.body.currentDs)}`);
    try {
        const newDs = await dsService.addNew(req.body.currentDs);
        logger.info(`newDs: ${newDs}`);
        return res.status(200).send({
            success: newDs
        });
    } catch (error) {
        logger.debug(error);
        logger.debug(`errorMessage: ${error.message}`);
        return res.status(500).send({
            error: error.message
        });
    }
}


