const express = require("express");
const route = express.Router();

route.get("/secure", (req, res) => {
  res.send("Hi i m secure");
});

module.exports = route;
