const UserAcconts = require("../models/userAccountsModels");
const User = require("../models/usersModels");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/jwtAuth");

const userAccountsControllers = {
  registerAccount: async (req, res) => {
    try {
      const { name, address, phoneNum, email, username, birthday, password } =
        req.body;
      if (
        !name ||
        !address ||
        !phoneNum ||
        !email ||
        !username ||
        !birthday ||
        !password
      ) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      const userData = {
        user_name: name,
        user_add: address,
        user_num: phoneNum.toString(),
      };

      const userResult = await User.create(userData);

      const accountDetails = {
        user_id: userResult.insertId,
        user_name: name,
        user_email: email,
        account_username: username,
        user_birthday: birthday,
        password: password,
      };

      const result = await UserAcconts.registerAccount(accountDetails);

      const { password: _, ...responseData } = accountDetails;

      res.status(201).json({
        success: true,
        message: "Account registerd successfuly",
        data: {
          ...responseData,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error registering account",
        error: error.message,
      });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      const user = await UserAcconts.loginUser(email);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const token = generateToken(user);

      const { password: _, ...userData } = user;

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: userData,
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error logging in",
        error: error.message,
      });
    }
  },

  getProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await UserAcconts.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const { password, ...userData } = user;

      res.json({
        success: true,
        data: userData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching profile",
        error: error.message,
      });
    }
  },
};

module.exports = userAccountsControllers;
