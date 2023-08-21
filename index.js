const express = require("express");

const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "./config.env"),
});
const mongoose = require("mongoose");
const Items = require("./model/items");

const homeRoute = require("./routes/homeRoute");

const app = express();

console.log(process.env.DATABASE_LOCAL);
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("connected to DB");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);

app.listen(3000, () => console.log("Server running on http://localhost:3000/"));
