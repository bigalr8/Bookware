const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BookSchema = new Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  authors: {
    type: [String],
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  published: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  price: {
    //display: "9.99", approx: 9.9900000000000002, currency: "USD",
    type: String,
    required: false
  },
  availability: {
    type: String,
    required: false
  },
  rating: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Book = mongoose.model("book", BookSchema);