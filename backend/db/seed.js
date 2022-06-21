const AddressBook = require("../models/AddressBook");

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    address: {
      street: "2 Pine Rd",
      city: "Melville",
      State: "NY",
      zipCode: 11778,
    },
    phone: {
      cell: 6315551234,
    },
    emailAddress: "johndoe@gmail.com",
  },
  {
    firstName: "Test",
    lastName: "Testing",
    address: {
      street: "2 Test Lane",
      city: "Test City",
      State: "NY",
      zipCode: 11778,
    },
    phone: {
      cell: 6315555555,
    },
    emailAddress: "TestData@gmail.com",
  },
];

AddressBook.deleteMany({}).then(() => {
  console.log("Deleted all addresses");
  AddressBook.create(data).then((addresses) => {
    console.log(addresses);
    process.exit();
  });
});
