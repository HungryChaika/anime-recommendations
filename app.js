require("dotenv").config();
const path = require("path");
const express = require("express");

const app = new express();

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3001;

const DB = require("./application/DB/DB");
const db = new DB();

app.use("/", express.static(path.resolve(__dirname + "/public")));

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () =>
  console.log(`Server running at port ${port}. ${host}:${port}`)
);
