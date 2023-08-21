const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("items", itemsSchema);
