import express from "express";
import mongoose from "mongoose";
const router = express.Router();

const dbUrl =
  "mongodb+srv://Kulinski-admin:RemedyzRolling420@cluster1.lgjgp.mongodb.net/currencyConverter?retryWrites=true&w=majority";

router.route("/").get((req, res) => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => {
      console.log("error", e);
    });
});

export default router;
