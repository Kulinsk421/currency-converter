require("dotenv").config();
import express from "express";
import convertedData from "../models/convertedModel";

const router = express.Router();

router.route("/").put((req, res, next) => {
  const { currencyTo, amountFrom, convertedInUsd } = req.body;

  try {
    const newData = new convertedData({
      amountFrom,
      currencyTo,
      convertedInUsd,
    });

    newData.save();
    res.json({ status: 200 });
  } catch (e) {
    next(e);
  }
});

export default router;
