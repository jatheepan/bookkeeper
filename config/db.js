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
        connect: function() {
            return new Promise((resolve, reject) => {
                mysqlConnection.getConnection((err, connection) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(connection);
                    }


                });
            });
        }
    }
};