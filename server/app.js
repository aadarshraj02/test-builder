const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const testRoutes = require("./routes/test.routes");

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

app.use("/api/users", userRoutes);
app.use("/api/tests", testRoutes);

module.exports = app;
