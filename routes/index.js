const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

 
router.use("/api", apiRoutes);

 
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

console.log("routes/api/index");

module.exports = router;