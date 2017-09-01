"use strict";

const ExpenseModel = require('../../models/Expense');

function getExpenses(query = {}, options = {}) {
    const limit = options.limit || 10;
    const offset = options.offset || 0;

    return ExpenseModel.paginate(query, {limit, offset, lean: true});
}

function getExpense(id, callback) {
    if(!id || !callback) {
        callback(new Error('Missing parameters'));
    }
    ExpenseModel.findOne({_id: id}, (err, data) => {
        callback(err, data);
    });
}

module.exports = {getExpenses, getExpense};