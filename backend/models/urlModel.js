import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    ds: { type: String, trim: true, required: true },
    url: { type: String, trim: true, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deletedAt: { type: Number, default: null },
});

urlSchema.statics = {
    createNew(currentUrlDict) {
        //  sample currentUrlDict is {
        //      url: 'https://www.zillow.com/homedetails/1013-Zacarias-Dr-Leander-TX-78641/250925071_zpid/',
        //      ds: '02-01-2021'
        //  }
        return this.create(currentUrlDict);
    },
    checkExists(currentUrlDict) {
        const currentUrl = currentUrlDict.url;
        const currentDs = currentUrlDict.ds;
        return this.findOne({
            $and: [
                { url: currentUrl },
                { ds: currentDs }
            ],
        }).exec();
    },
    findAllUrlsNotDone() {
        return this.find({ done: false })
            .exec();
    },
    updateStatusDone(currentUrlDict) {
        const currentUrl = currentUrlDict.url;
        const currentDs = currentUrlDict.ds;
        return this.updateOne(
            {
                $and: [
                    { url: currentUrl },
                    { ds: currentDs },
                    { done: false }
                ],
            },
            {
                done: true,
                updatedAt: Date.now()
            }
        ).exec()
    }

};

urlSchema.methods = {
    //   ds Schema methods
};

export default mongoose.model('url', urlSchema);