const UserAcconts = require("../models/userAccountsModels");
const User = require("../models/usersModels");

const userAccountsControllers = {
  registerAccount: async (req, res) => {
    try {
      const { name, address, phoneNum, email, username, birthday, password } = req.body;
      if (!name || !address || !phoneNum || !email || !username || !birthday || !password) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }


      const userData = {
        user_name: name,
        user_add: address,
        user_num: phoneNum.toString()
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
};

module.exports = userAccountsControllers;
