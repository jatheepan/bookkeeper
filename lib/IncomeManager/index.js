"use strict";

const squel = require('squel');
const mysql = require('../../config/db').mysql;
const IncomeModel = require('../../models/Income');

module.exports = {
    getIncomes() {
        return new Promise((resolve, reject) => {
            IncomeModel
                .find({})
                .populate('_province')
                .exec((err, incomes) => (err) ? reject(err) : resolve(incomes));
        });


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