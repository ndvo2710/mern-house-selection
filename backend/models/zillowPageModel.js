import mongoose from 'mongoose';


const zillowSchema = new mongoose.Schema({
    price: {
        type: Number,
        trim: true,
        required: true
    },
    details: {
        type: String,
        trim: true,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    ds: {
        type: String,
        trim: true,
        require: true
    },
    address: {
        type: String,
        trim: true,
        require: true
    },
    status: {
        type: String,
        trim: true,
        require: true
    },
    monthlyMortgage: {
        type: Number,
        trim: true,
        required: true
    },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deletedAt: { type: Number, default: null },
});


zillowSchema.statics = {
    createNew(itemDict) {
        return this.create(itemDict);
    },
    checkExists(itemDict) {
        return this.findOne({ address: itemDict.address, ds: itemDict.ds }).exec();
    },
    getItemsByDs(ds) {
        return this.find({ ds: ds }).exec();
    }
};

zillowSchema.methods = {
    //   ds Schema methods
};

export default mongoose.model('zillowPage', zillowSchema);