var express = require("express");
var router = express.Router();
const V1Routes = require("./v1");

// Health Check API
router.get("/status", function (req, res, next) {
  return res.json({ code: 200, message: "Server UP AND Running, OK!" });
});

router.use("/api/v1", V1Routes);

module.exports = router;
