const router = require("express").Router();

const googleBooksController = require("../../controllers/googleBooksController");

 
router
  .route("/")
  .get(googleBooksController.findAll);

console.log("routes/api/googleBooks")

module.exports = router;
