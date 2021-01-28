import dotenv from 'dotenv';
import * as logging from './loggingUtils.js';

const logger = logging.getLogger('secrets');

dotenv.config();

const ATLAS_URL = process.env.ATLAS_URL;


export {
    ATLAS_URL
};
