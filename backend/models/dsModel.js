import mongoose from 'mongoose';

const dsSchema = new mongoose.Schema({
    ds: { type: String, required: true },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deletedAt: { type: Number, default: null },
});

dsSchema.statics = {
    createNew(item) {
        return this.create({ ds: item });
    },
    checkExists(currentDs) {
        return this.findOne({ ds: currentDs }).exec();
    }

};

dsSchema.methods = {
    //   ds Schema methods
};

export default mongoose.model('ds', dsSchema);