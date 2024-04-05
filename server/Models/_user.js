const mongoose = require("mongoose");

const UUSERSchema = new mongoose.Schema({

  googleId: {
    type: String,
  },

  secret: {
    type: String,
  },
  
  FirstName: {
    type: String,
    required: false,
  },

  LastName: {
    type: String,
    required: false,
  },

  Email: {
    type: String,
    required: false,
    unique: false,
  },

  Password: {
    type: String,
    required: false,
  },

  isAdmin: {
    type: Boolean,
    default: true,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },
  secret: {
    type: String,
  },

  PrimaryKey: {
    type: String,
  },
  Photo: {
    type: String,
    default : "user.jpeg"
  },
  Mobile: {
    type: String,
    required: false,
  },
  ConnectionHistory: [
    {
      type: String,
    }
  ],

  Address: {
    Rue: {
      type: String,
    },
    City: {
      type: String,
    },
    ZIPcode: {
      type: String,
    },
      },
});

module.exports.UUSER = mongoose.model("UUSER", UUSERSchema);
