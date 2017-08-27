"use strict";

const squel = require('squel');
const mysql = require('../config/db').mysql;
const ExpenseModel = require('../models/Expense');

function getExpenses() {
    const query = squel.select().from('expenses');

    return new Promise((resolve, reject) => {
        ExpenseModel.find({}, (err, expenses) => {
            if(err){
                return reject(err);
            }
            resolve(expenses);
        });
    });
}

module.exports = {getExpenses};