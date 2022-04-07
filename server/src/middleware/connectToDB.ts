import mongoose from "mongoose";

export default function conncetToDB(req, res, next) {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => {
      console.log("error", e);
    });
  next();
}
