require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import convertedData from "../models/convertedModel";

const dbUrl = process.env.DB_URL;

router.route("/sendToDb").post((req, res) => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => {
      console.log("error", e);
    });
  const { currencyTo, amountFrom } = req.body;

  const newData = new convertedData({ amountFrom, currencyTo });

  newData.save();
});

router.route("/sendFromDb").get((req, res) => {
  convertedData
    .find()
    .then((foundConvertedData) => res.json(foundConvertedData));
});

export default router;
