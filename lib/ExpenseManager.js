"use strict";

const squel = require('squel');
const mysql = require('../config/db').mysql;
const ExpenseModel = require('../models/Expense');

function getExpenses(query = {}, options = {}) {
    const limit = options.limit || 10;
    const offset = options.offset || 0;

    return ExpenseModel.paginate(query, {limit, offset, lean: true});
}

module.exports = {getExpenses};