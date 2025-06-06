const mysql = require('mysql');
require('dotenv').config();

const dbConfig ={
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const dbConnnection = mysql.createConnection(dbConfig);

dbConnnection.connect((err) => {
    if (err) {
        console.error('Error connecting to daatabase: ' + err);
        return;
    }
    console.log('Connected to the database sucessfully');
});

module.exports = dbConnnection;