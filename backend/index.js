import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
// import mongoose from 'mongoose';
import { connectDB } from './config/connectDB.js';
import { initRoutes } from './routes/web.js';
import * as logging from './utils/loggingUtils.js';
import { PORT } from './utils/secrets.js';


const logger = logging.getLogger('MainIndex');

connectDB();

const app = express();

app.use(express.static(path.join(path.dirname(process.cwd()), 'client', 'build')));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

initRoutes(app);

app.listen(PORT, () => logger.info(`Server is running on port: ${PORT}`));


