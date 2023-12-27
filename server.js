const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 8000;
const db = require("./config/mongoose");
const cors = require("cors");
require("dotenv").config();

// Middleware for CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

// Middleware for parsing request bodies
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.use("/survey", require("./routes/survey"));
app.use("/admin", require("./routes/admin"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
    return;
  }
  console.log(`Server is running on port ${port}`);
});

module.exports = app;