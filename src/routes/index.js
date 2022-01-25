const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  /* GET home page. */

  res.render("index", { title: "Express" })
});

module.exports = router;
