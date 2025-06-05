const express = require("express");
const userAccountRouter = express.Router();
const { verifyToken } = require("../middleware/jwtAuth")
const hashPassword = require("../middleware/passwordHashing");
const userAccountsControllers = require("../controllers/userAccountsControllers");

userAccountRouter.post("/register", hashPassword, userAccountsControllers.registerAccount);
userAccountRouter.post("/login", userAccountsControllers.loginUser);
userAccountRouter.get("/profile", verifyToken, userAccountsControllers.getProfile);

module.exports = userAccountRouter