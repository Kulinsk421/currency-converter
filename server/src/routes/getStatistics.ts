import express from "express";
import convertedData from "../models/convertedModel";

const router = express.Router();

type Win = {
  favCurrency: {
    element: string;
    occured: number;
  };
};

router.route("/").get(async (req, res) => {
  const data = await convertedData.find({});

  const targetCurrencies = data.map((stat) => stat.currencyTo);

  const amountsToConvert = data.map((stat) =>
    parseFloat(stat.convertedInUsd.toFixed(3))
  );
  let sum = 0;
  for (let i = 0; i < amountsToConvert.length; i++) {
    sum += amountsToConvert[i];
  }
  const totalAmount = parseFloat(sum.toFixed(3));

  const totalConversions = targetCurrencies.length;

  let favCurrency = { element: null, occured: 0 };
  const result = targetCurrencies.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    if (acc[el] > favCurrency.occured) {
      favCurrency = { element: el, occured: acc[el] };
    }
    return acc;
  }, {});

  res.json({ data: { totalConversions, totalAmount, favCurrency } });
});

export default router;
