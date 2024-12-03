const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/db");
const cookieParser = require("cookie-parser");

dotenv.config();
const cors = require("cors");

const app = express();

app.use(cors());
connectToDB();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());


module.exports = app;
