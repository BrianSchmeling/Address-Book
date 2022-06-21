const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const AddressBookSchema = new Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  address: {
    street: String,
    city: String,
    State: String,
    zipCode: Number,
  },
  phone: {
    home: Number,
    cell: Number,
    work: Number,
    fax: Number,
  },
  emailAddress: String,
});

const AddressBook = mongoose.model("AddressBook", AddressBookSchema);

module.exports = AddressBook;
