import { connectDB } from '../config/connectDB.js';
import { urlService } from '../services/index.js';

connectDB();
(async function fetchUrlsNotDone() {
    const UrlDicts = await urlService.fetchUrlsNotDone();
    console.log(JSON.stringify(UrlDicts, null, 2));
})()