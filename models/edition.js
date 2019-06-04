const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EditionSchema = new Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
   cost: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  minimum:{
    display: "9.99", approx: 9.9900000000000002, currency: "USD",
    type: String,
    required: true
    },
  category: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: false
  },
  ranking: {
    type: String,
    required: false
  },
  rating: {
    type: String,
    required: false
  },
  BuySell: {
    type: String,
    required: false
  },
  googleID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Edition = mongoose.model("edition", UserSchema);