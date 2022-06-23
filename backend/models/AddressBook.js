const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const AddressBookSchema = new Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  home: Number,
  cell: Number,
  work: Number,
  fax: Number,
  emailAddress: String,
});

const AddressBook = mongoose.model("AddressBook", AddressBookSchema);

module.exports = AddressBook;
