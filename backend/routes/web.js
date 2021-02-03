import express from 'express';
import { dsController, zillowPageController } from '../controllers/index.js';
import urlController from '../controllers/urlController.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('Routes Web');


const router = express.Router();

/**
 * Init all routes
 * @param app from express module
 */

export const initRoutes = (app) => {
    router.get('/test', function (req, res) {
        logger.info('Calling /test');
        return res.send('Testing Express Router')
    });

    router.post('/create-ds', dsController.createNewDS);
    router.get('/fetch-ds', dsController.fetchAllDS);
    router.post('/create-url', urlController.createNewUrl);
    router.post('/zillow-page', zillowPageController.createNewZillowPage);
    router.get('/fetch-zillow/:ds', zillowPageController.fetchAllPagesByDs);

    return app.use('/', router);
};