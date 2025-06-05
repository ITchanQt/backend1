const dbConnection = require("../config/dbconfig");

const UserAcconts = {
  registerAccount: (accountDetails) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        "INSERT INTO user_accounts SET ?",
        accountDetails,
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  },
  loginUser: (email, password) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        "SELECT * FROM user_accounts WHERE user_email = ?",
        [email],
        (error, results) => {
          if (error) reject(error);
          resolve(results[0]);
        }
      );
    });
  },
  findById: (userId) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        " SELECT * FROM user_accounts WHERE user_id = ? ",
        [userId],
        (error, result) => {
          if (error) reject(error);
          resolve(result[0]);
        }
      );
    });
  }
};

module.exports = UserAcconts;
