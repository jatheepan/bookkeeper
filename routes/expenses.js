"use strict";

const route = module.exports = require('express').Router();
const ExpenseManager = require('../lib/ExpenseManager');

route.get('/', (req, res, next) => {
    ExpenseManager.getExpenses()
        .then(result => {
            result.data = results.docs;
            result.success = true;
            res.jsonp(result);
        })
        .catch(err => next(err));
});