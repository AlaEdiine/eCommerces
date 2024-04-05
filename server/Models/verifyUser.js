const mongoose = require("mongoose");

const VERIFYUSERSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UUSER",
        required: true,
    },
    tokens: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

});

module.exports.VERIFYUSER = mongoose.model('VERIFYUSER' , VERIFYUSERSchema)