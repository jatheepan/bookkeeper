"use strict";

const squel = require('squel');
const mysql = require('../../config/db').mysql;

module.exports = {
    getIncomes() {
        const query = squel.select().from('incomes');

        return new Promise((resolve, reject) => {
            mysql
                .connect()
                .then(connection => {
                    connection.query(query.toString(), (err, incomes) => {
                        connection.release();
                        if(err) {
                            return reject(err);
                        }
                        resolve(incomes);
                    });
                })
                .catch(err => reject(err));
        });
    }
};