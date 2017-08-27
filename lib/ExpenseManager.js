"use strict";

const squel = require('squel');
const mysql = require('../config/db').mysql;
const ExpenseModel = require('../models/Expense');

function getExpenses(query = {}, options = {}) {
    const limit = options.limit || 10;
    const offset = options.offset || 0;

    return new Promise((resolve, reject) => {
        ExpenseModel.paginate(query,{limit, offset},  (err, expenses) => {
            if(err){
                return reject(err);
            }
            resolve(expenses);
        });
    });
}

module.exports = {getExpenses};