import puppeteer from 'puppeteer';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('browser')

class browserObject {
    static async startBrowser() {
        let browser;
        try {
            logger.info("Opening the browser......");
            browser = await puppeteer.launch({
                executablePath: '/usr/bin/chromium-browser',
                headless: false,
                args: ["--disable-setuid-sandbox"],
                'ignoreHTTPSErrors': true
            });
        } catch (err) {
            logger.debug("Could not create a browser instance => : ", err);
        }
        // await new Promise(resolve => setTimeout(resolve, 5000));
        return browser;
    }
}

export default browserObject
