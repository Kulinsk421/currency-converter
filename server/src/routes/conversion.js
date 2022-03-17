const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Yo this is conversion");
});

module.exports = router;
