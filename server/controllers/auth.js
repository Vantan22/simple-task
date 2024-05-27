require("dotenv").config();
const secret = process.env.SECRET_KEY;

const emailjs = require("@emailjs/nodejs");

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;
const privateKey = process.env.EMAILJS_PRIVATE_KEY;

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

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 401;
      throw error;
    }

    const loadedUser = user;
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Wrong password!");
      error.statusCode = 401;
      throw error;
    }

    // Generate token
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const expiresIn = Math.floor((tomorrow - now) / 1000);

    const token = jwt.sign(
      {
        userId: loadedUser._id.toString(),
      },
      secret,
      { expiresIn: expiresIn },
    );
    res.status(200).json({ token: token, userId: loadedUser._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 401;
      throw error;
    }
    const resetCode = Math.floor(100000 + Math.random() * 900000);
    user.resetCode = resetCode;
    user.resetCodeExpiration = new Date(Date.now() + 120000);
    const templateParams = {
      to: email,
      subject: "Reset Password Code",
      from_name: "Simple Task",
      to_name: user.email,
      resetCode: resetCode.toString(),
    };
    await user.save();
    await emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
        privateKey: privateKey,
        // optional, highly recommended for security reasons
      })
      .then(
        (response) => {
          console.log("SUCCESS", response.status, response.text);
        },
        function (error) {
          console.log("FAILED", error);
        },
      );
    res.status(200).json({ message: "Email sent!", resetCode: resetCode });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.newPassword = async (req, res, next) => {
  const { email, resetCode, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 401;
      throw error;
    }
    if (user.resetCode !== resetCode) {
      const error = new Error("Invalid reset code!");
      error.statusCode = 401;
      throw error;
    }
    if (user.resetCodeExpiration < Date.now()) {
      const error = new Error("Reset code expired!");
      error.statusCode = 401;
      throw error;
    }
    user.password = await bcrypt.hash(password, 12);
    user.resetCode = null;
    user.resetCodeExpiration = null;
    await user.save();
    res.status(200).json({ message: "Password changed!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
