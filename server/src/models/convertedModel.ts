import mongoose from "mongoose";
import * as Mongoose from "mongoose";

interface Schema {
  amountFrom: string;
  currencyTo: string;
  convertedInUsd: Number;
}

const convertedDataSchema = new Mongoose.Schema<Schema>({
  amountFrom: String,
  currencyTo: String,
  convertedInUsd: Number,
});

const convertedData = mongoose.model("convertedData", convertedDataSchema);

export default convertedData;
