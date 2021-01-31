import dsSchema from '../models/dsModel.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('dsService');


class dsService {
    static async addNew(currentDs) {
        const dsExist = await dsSchema.checkExists(currentDs);
        if (dsExist) {
            throw new Error('Ds already existed');
        }
        const newDs = await dsSchema.createNew(currentDs);
        return newDs
    }
}


export default dsService;