const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let object = {
      burgers: data,
    };
    res.render("index", object);
  });
});

router.post("/api/burgers", function (req, res) {
  let name = req.body;
  burger.create(name, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let id = req.params.id;

  burger.update(id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
