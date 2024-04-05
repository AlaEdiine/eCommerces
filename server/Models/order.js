const mongoose = require("mongoose");

const ORDERSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UUSER",
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },

    listProduct: [],

    SumTT:{
        type: Number,
        required: true,
    }

});

module.exports.ORDER = mongoose.model('ORDER' , ORDERSchema)