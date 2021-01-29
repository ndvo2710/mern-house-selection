import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// import mongoose from 'mongoose';
import { connectDB } from './config/connectDB.js';
import { PORT } from './utils/secrets.js';

connectDB();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));


