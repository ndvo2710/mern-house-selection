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

export const disconnectDB = () => {
    mongoose.Promise = bluebird;
    mongoose.disconnect();
}

function defer(callback) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(callback());
        }, 1000);
    });
}

class MongoConnectAsync {
    static async connectDB() {
        logger.info('Running Async ConnectDB');
        await defer(connectDB);
    }

    static async disconnectDB() {
        logger.info('Running Async DisconnectDB');
        await defer(disconnectDB);
    }
}

export default MongoConnectAsync;