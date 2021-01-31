import dsSchema from '../models/dsModel.js';
import * as logging from '../utils/loggingUtils.js';

const logger = logging.getLogger('dsService');


class dsService {
    static async addNew(currentDs) {
        const newDs = await dsSchema.createNew({ ds: currentDs });
        return newDs
    }
}


// const dsService = {
//     addNew: async (currentDs) => {
//         const newDs = await dsSchema.createNew({ ds: currentDs });
//         return newDs
//     }
// }

export default dsService;