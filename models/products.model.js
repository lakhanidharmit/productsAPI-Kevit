const mongoose = require('mongoose');
const Counter = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true,
        Default : false
    },

}, { timestamps : true , versionKey : false});

productSchema.plugin(Counter, {inc_field: 'id'});

module.exports = mongoose.model("Product", productSchema);