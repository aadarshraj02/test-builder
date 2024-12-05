const Test = require("../models/test.model");
const User = require("../models/user.model");

const createTest = async (req, res) => {
  try {
    const { title, questions } = req.body;
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newTest = new Test({
      title,
      user: req.user._id,
      questions,
    });
    await newTest.save();

    res.status(201).json({
      message: "Test created successfully",
      test: newTest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create test",
    });
  }
};

module.exports = { createTest };
