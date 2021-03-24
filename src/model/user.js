const mongoose = require("mongoose");

let User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  image_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  site: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("User", User);
