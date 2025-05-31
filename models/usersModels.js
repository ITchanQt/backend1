const dbConnection = require("../config/dbconfig");

const Users = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      dbConnection.query("SELECT * FROM users", (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },

  create: (userData) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        "INSERT INTO users SET ? ",
        userData,
        (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
  },
};

module.exports = Users;
