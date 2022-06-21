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

router.post("/new", (req, res) => {
  AddressBook.create(req.body).then((address) => {
    res.json(address);
  });
});

router.put("/:firstName/:lastName", (req, res) => {
  AddressBook.findOneAndUpdate(
    { firstName: req.params.firstName, lastName: req.params.lastName },
    req.body,
    { new: true }
  ).then((address) => {
    res.json(address);
  });
});

router.delete("/:firstName/:lastName", (req, res) => {
  AddressBook.findOneAndDelete({
    firstName: req.params.firstName,
    lastName: req.params.lastName,
  }).then((address) => {
    res.json(address);
  });
});

module.exports = router;
