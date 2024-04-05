const mongoose = require("mongoose");

const PRODUCTESchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldprice: {
        type: String,
        required: true,
    },
    color: {
    type: String,
    required: true,
    },
    brand: {
    type: String,
    required: true,
    },
    Comment: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UUSER",
                required: true,
            },
            commentaires : {
                type: String,
            },
            race : {
                type: String,
                default: 0
            }
        }
    ],
    photo: {
        type: String,
        required: true,
    },
    featured: {
        type: String,
    },


});

module.exports.PRODUCTE = mongoose.model('PRODUCTE' , PRODUCTESchema)