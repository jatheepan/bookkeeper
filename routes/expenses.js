"use strict";

const route = module.exports = require('express').Router();
const ExpenseManager = require('../lib/ExpenseManager');

route.get('/', (req, res, next) => {
    ExpenseManager.getExpenses()
        .then(expenses => {
            res.jsonp({
                data: expenses,
                success: true
            });
        })
        .catch(err => next(err));
});