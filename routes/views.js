const router = require("express").Router();
const path = require("path");



//View for EXERCISE
router.get("/exercise", (req, res) => {
  console.log("i have been hit");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});



//View for STATS
router.get("/stats", (req, res) => {
  console.log("i have been hit");
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});





module.exports = router;
