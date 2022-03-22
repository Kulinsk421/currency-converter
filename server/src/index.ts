import express from "express";
const app = express();
const PORT = 5000;
import conversion from "./routes/conversion";
import sendToDB from "./routes/sendToDB";

app.use("/conversion", conversion);
app.use("/sendToDB", sendToDB);

app.get("/", (req, res) => {
  res.send("this is index");
});

app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
