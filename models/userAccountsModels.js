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
    }
}

module.exports = UserAcconts;