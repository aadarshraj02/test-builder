const express = require("express");
const router = express.Router();
const { createTest } = require("../controllers/test.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/create", authMiddleware.authUser, createTest);

module.exports = router;
