require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import connectToDB from "./middleware/connectToDB";
import router from "./routes";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(connectToDB);
app.use(bodyParser.json());
app.use(`/api`, router);

app.get("/", (req, res) => {
  res.send(
    "For API endpoints navigate to /api/get-rates and /api/get-statistics"
  );
});

app.use(
  (
    err: { status?: number; message: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
      status: statusCode,
      message: err?.message,
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
