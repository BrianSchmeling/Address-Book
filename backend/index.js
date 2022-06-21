const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const addressBookController = require("./controllers/addressBook");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use("/", addressBookController);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
