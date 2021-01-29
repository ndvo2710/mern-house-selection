import bluebird from 'bluebird';
import mongoose from 'mongoose';
import * as logging from '../utils/loggingUtils.js';
import { ATLAS_URL } from '../utils/secrets.js';

const logger = logging.getLogger('connectDB');

/**
 * Connect to MongoDB
 */
export const connectDB = () => {
    mongoose.Promise = bluebird;
    mongoose
        .connect(ATLAS_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then((_) => {
            logger.info('Already connected to MongoDB Atlas!');
        })
        .catch((e) => {
            logger.debug('Failed to establish connection to MongoDB Atlas!');
            throw new Error(e);
        });
};

