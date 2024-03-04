var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/mlaList", function (req, res, next) {
  if (req.voterid == 13423) {
    res.send(true);
  } else {
    res.send(false);
  }
});
// write a post request that prints out the received data in console
router.post("/", function (req, res, next) {
  console.log(req.body.name);
  res.send("Post request received");
});

module.exports = router;
