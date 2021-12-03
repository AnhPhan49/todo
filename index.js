require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./src/routes");
const mongoConnect = require("./src/config/database.config");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoConnect()
route(app)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});