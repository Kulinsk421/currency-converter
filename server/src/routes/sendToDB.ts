import express from "express";
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Yo this is db connection");
});

export default router;
