require("dotenv").config();
import axios from "axios";
import express from "express";
import { fetchRates } from "../helpers/fetchRates";

const router = express.Router();
router.route("/").post(async (req, res, next) => {
  const conversionApiUrl = req.protocol + "://" + req.get("host");

  if (!req.body.currencyFrom) {
    next({ message: "You must provide currencies select" });
  }
  if (!req.body.currencyTo) {
    next({ message: "You must provide currencies select" });
  }
  if (!req.body.amountFrom) {
    next({ message: "You must provide input" });
  }

  const { currencyFrom, currencyTo, amountFrom } = req.body;

  try {
    const currencyRatesRes = await fetchRates();
    const currencyRates = currencyRatesRes.data.rates;
    const rateFrom = currencyRates[currencyFrom];
    const rateTo = currencyRates[currencyTo];
    let convertedAmount = (rateTo / rateFrom) * Number(amountFrom);
    const resWrite = await axios.put(
      `${conversionApiUrl}/api/write-conversion`,
      {
        currencyTo,
        amountFrom,
      }
    );

    res.json({ convertedAmount, rateFrom, rateTo, currencyTo });
  } catch (err) {
    next(err);
  }
});

export default router;
