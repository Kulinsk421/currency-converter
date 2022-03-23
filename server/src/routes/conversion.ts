require("dotenv").config();
import express from "express";
import { fetchRates } from "../helpers/fetchRates";

const router = express.Router();
router.route("/").post(async (req, res, next) => {
  if (!req.body.currencyFrom) {
    next({ message: "You must provide input" });
    return;
  }

  const { currencyFrom, currencyTo, amountFrom } = req.body;

  try {
    const currencyRatesRes = await fetchRates();
    const currencyRates = currencyRatesRes.data.rates;
    const rateFrom = currencyRates[currencyFrom];
    const rateTo = currencyRates[currencyTo];
    let convertedAmount = (rateTo / rateFrom) * Number(amountFrom);

    res.json({ convertedAmount, rateFrom, rateTo, currencyTo });
  } catch (err) {
    console.log(err);
  }
});

export default router;
