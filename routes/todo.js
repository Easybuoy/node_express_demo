const express = require("express");

const Router = express.Router();

Router.delete("/", (req, res) => {
  res.json({ message: "Todo deleted successfully" });
});

Router.post("/", (req, res) => {
  console.log(req.body);
  // check if user exist
  // save ..
  res.json({ message: "Created", data: req.body });
});

module.exports = Router;
