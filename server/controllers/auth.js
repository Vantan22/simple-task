const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
exports.signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  console.log(fullName, email, password);
  const findUser = await User.findOne({ email });
  if (findUser) {
    const error = new Error("User exists already!");
    error.statusCode = 409;
    throw error;
  }
  console.log();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    res.status(201).json({ message: "User created!", userId: savedUser._id });
  } catch (err) {
    next(err);
  }
};
