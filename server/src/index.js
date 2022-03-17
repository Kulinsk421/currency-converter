const express = require("express");
const app = express();
const port = 5000;
const conversion = require("./routes/conversion");
const sendToDB = require("./routes/sendToDB");

app.listen(port);

app.use("/conversion", conversion);
app.use("/sendToDB", sendToDB);
app.get("/", (req, res) => {
  res.send("this is index");
});
