import mongoose from 'mongoose';

const dsSchema = new mongoose.Schema({
    ds: { type: String, trim: true, required: true },
    isChosen: { type: Boolean, default: true },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now },
    deletedAt: { type: Number, default: null },
});

dsSchema.statics = {
    createNew(currentDs) {
        return this.create({ ds: currentDs, isChosen: true });
    },
    checkExists(currentDs) {
        return this.findOne({ ds: currentDs }).exec();
    },
    getAllDsItem() {
        return this.find({}).sort({ ds: -1 }).exec();
    }

};

dsSchema.methods = {
    //   ds Schema methods
};

export default mongoose.model('ds', dsSchema);