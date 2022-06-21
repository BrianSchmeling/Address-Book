const AddressBook = require("../models/AddressBook");

const data = [
  {
    firstName: "Brian",
    lastName: "Schmeling",
    address: {
      street: "2 Woodlawn Rd",
      city: "Rocky Point",
      State: "NY",
      zipCode: 11778,
    },
    phone: {
      cell: 6315061506,
    },
    emailAddress: "BrianSchmeling2@gmail.com",
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
