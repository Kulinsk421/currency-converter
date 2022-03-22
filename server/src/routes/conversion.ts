require("dotenv").config();
import { default as axios } from "axios";
import express from "express";

const router = express.Router();
const apiURL = `https://openexchangerates.org/api/latest.json?app_id=${process.env.RATES_API_KEY}`;

router.route("/").get(async (req, res) => {
  try {
    const getCurrencyRates = await axios.get(apiURL);

    const currencyRates = getCurrencyRates.data.rates;
    const currencyNames = Object.keys(currencyRates);
    let currencyFrom = currencyRates.EUR;
    let currencyTo = currencyRates.CZK;
    let amount = 1;
    let conversionResult = ((currencyTo / currencyFrom) * amount).toFixed(3);

    res.json(parseFloat(conversionResult));
  } catch (err) {
    console.log(err);
  }
});

export default router;
