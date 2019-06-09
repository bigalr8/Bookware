const path = require("path");
const router = require("express").Router();
const googleBooksRoutes = require("./googleBooks");
const bookRoutes = require("./books");
 
router.use("/googleBooks", googleBooksRoutes);

router.use("/books", bookRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../../public/index.html"));
});

module.exports = router;
