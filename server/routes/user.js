const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/is-auth");
const { getUser, getUsers } = require("../controllers/user");

router.get("/user/:userId", getUser);

router.get("/users", getUsers);

module.exports = router;
