const express = require("express");
const app = express();
require("dotenv").config();

const dbConnect = require("./config/dbConnection.js");
dbConnect();
app.use( express.json() );
const router = require("./routes")

app.use(router)


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, function () {
  console.log("server is running");
});
