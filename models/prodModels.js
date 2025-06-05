const dbConnection = require("../config/dbconfig");

const Products = {
    getLastProductId: () => {
        return new Promise((resolve, reject) => {
            dbConnection.query(
                "SELECT prod_id FROM tbl_products ORDER BY prod_id DESC LIMIT 1",
                (error, results) => {
                    if (error) reject(error);
                    resolve(results[0]);
                }
            );
        });
    },

    createProd: (prodData)=> {
        return new Promise((resolve, reject) => {
            dbConnection.query(
                "INSERT INTO tbl_products SET ?",
                prodData,
                (error, results) => {
                    if (error) reject(error);
                    resolve(results);
                }
            );
        });
    }
}

module.exports = Products;