import bluebird from 'bluebird';
import mongoose from 'mongoose';
import { ATLAS_URL } from '../utils/secrets.js';

console.log(ATLAS_URL);
/**
 * Connect to MongoDB
 */
const connectDB = () => {
    mongoose.Promise = bluebird;
    mongoose
        .connect(ATLAS_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then((_) => console.log('Already connected to MongoDB Atlas!'))
        .catch((e) => {
            console.log('Failed to establish connection to MongoDB Atlas!');
            throw new Error(e);
        });
};


// (connectDB)();
module.exports = connectDB;