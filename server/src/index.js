const express = require("express");
const app = express();
const port = 5000;

app.listen(port);

app.get("/api", (req, res) => {
  res.json({ users: ["one", "two", "three"] });
});
