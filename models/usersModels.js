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
        }
      );
    });
  },

  updateById: (userData, id) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        "UPDATE users SET ? WHERE user_id = ?",
        [userData, id],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  },

  findUserById: (id) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        "SELECT * FROM users WHERE user_id = ?",
        [id],
        (error, results) => {
          if (error) reject(error);
          if (results.length === 0) {
            return reject(new Error("User not found"));
          }
          resolve(results[0]);
        }
      );
    });
  },

  deleteUserById: (id) => {
    return new Promise((resolve, reject) => {
      dbConnection.query(
        "DELETE FROM users WHERE user_id = ?",
        [id],
        (error, results) => {
          if (error) reject(error);
          if (results.affectedRows ===0 ) {
            return reject(new Error("User ot found"));
          }
          resolve({
            success: true,
            message: "User deleted successfully",
            data: {
              user_id: id,
            }
          })
        }
      )
    })
  }
};

module.exports = Users;
