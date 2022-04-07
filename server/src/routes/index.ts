import express from "express";
import conversion from "./conversion";
import getRates from "./getRates";
import getStatistics from "./getStatistics";
import writeConversion from "./writeConversion";

const router = express.Router();

router.use("/conversion", conversion);
router.use("/get-rates", getRates);
router.use("/get-statistics", getStatistics);
router.use("/write-conversion", writeConversion);

export default router;
