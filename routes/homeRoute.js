const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");

const Items = require("../model/items");
router.use(express.static("views"));

router.get("/", async (req, res) => {
  var items = await Items.find().lean();
  res.render("index.ejs", { items: items });
});

router.get("/search/:name", async (req, res) => {
  var parameter = req.params.name;
  var items = await Items.find({ name: new RegExp(req.params.name) }).lean();
  /* WORKS THE SAME (MONGOOSE WAY) var items = await Items.find({ name: { $regex: req.params.name } }); */

  res.render("index.ejs", {
    items: items,
  });
});

module.exports = router;
