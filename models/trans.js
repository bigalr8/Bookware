const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TransSchema = new Schema({
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
  googleID: {
    type: String,
    required: true
  },
  transDate: {
    type: String,
    required: false
  },
  transType: {
    type: String,
    required: false
  },
  transPrice: {
    display: "9.99", approx: 9.9900000000000002, currency: "USD",
    type: String,
    required: false
  },
  contraParty: {
    type: String,
    required: false
  },
  condition: {
      type: String,
      required: false
  },
  notes: {
    type: String,
    required: false
  },
  value: {
    display: "9.99", approx: 9.9900000000000002, currency: "USD",
    type: String,
    required: false
  },
  ProfitLoss: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Trans = mongoose.model("trans", TransSchema);


 