import express from "express";
import { fetchRates } from "../helpers/fetchRates";
const router = express.Router();

router.route("/").get(async (req, res) => {
  const getRatesRes = await fetchRates();

  res.json({ data: getRatesRes.data.rates });
});

export default router;
