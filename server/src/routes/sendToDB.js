const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Yo this is db connection");
});

module.exports = router;
