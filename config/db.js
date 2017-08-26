"use strict";

const mysql = require('mysql');
const mysqlConnection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'book_keeper'
});

module.exports = {
    mysql: {
        connect: () => new Promise((resolve, reject) => {
            mysqlConnection.getConnection((err, connection) => (err) ? reject(err) :
                resolve(connection));
        })
    }
};