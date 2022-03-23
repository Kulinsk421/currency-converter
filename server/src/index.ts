import express, { NextFunction, Request, Response } from "express";
const app = express();
const PORT = 5000;
import bodyParser from "body-parser";
import conversion from "./routes/conversion";
import sendToDB from "./routes/sendToDB";
import getRates from "./routes/getRates";
import cors from "cors";

app.use(cors());
app.use(bodyParser.json());
app.use("/conversion", conversion);
app.use("/get-rates", getRates);
app.use("/sendToDB", sendToDB);

app.get("/", (req, res) => {
  res.send("For API endpoints navigate to /api/conversion or /api/getRates");
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
