const express = require("express");
const userAccountRouter = express.Router();

const hashPassword = require("../middleware/passwordHashing");
const userAccountsControllers = require("../controllers/userAccountsControllers");

userAccountRouter.post("/register", hashPassword, userAccountsControllers.registerAccount);

module.exports = userAccountRouter