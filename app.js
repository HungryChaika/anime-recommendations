require("dotenv").config();
const path = require("path");
const express = require("express");

const app = new express();

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3001;

app.use("/", express.static(path.resolve(__dirname + "/public")));

app.listen(port, () =>
  console.log(`Server running at port ${port}. ${host}:${port}`)
);
