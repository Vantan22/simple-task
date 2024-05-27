const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/auth");
const { body } = require("express-validator");
router.post(
  "/signup",
  [
    // Validate Request
    body("fullName").isLength({ min: 3 }).withMessage("Full Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password is required"),
  ],
  signup,
);

router.post("/login", login);

module.exports = router;
