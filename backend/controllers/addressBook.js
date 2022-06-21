const express = require("express");
const router = express.Router();
const AddressBook = require("../models/AddressBook");

router.get("/", (req, res) => {
  AddressBook.find({}).then((addresses) => {
    res.json(addresses);
  });
});

router.get("/:firstName/:lastName", (req, res) => {
  AddressBook.find({
    firstName: req.params.firstName,
    lastName: req.params.lastName,
  }).then((address) => {
    res.json(address);
  });
});

module.exports = router;
