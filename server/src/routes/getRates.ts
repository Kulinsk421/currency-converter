import express from "express";
import { fetchRates } from "../helpers/fetchRates";
const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const getRatesRes = await fetchRates();
    res.json({ data: getRatesRes.data });
  } catch (e) {
    next(e);
  }
});

export default router;
