"use strict";

const route = module.exports = require('express').Router();
const ExpenseManager = require('../lib/ExpenseManager');

route.get('/', (req, res, next) => {
    ExpenseManager.getExpenses()
        .then(result => {
            result.data = result.docs;
            delete result.docs;
            resutlt.success = true;
            res.jsonp(result);
        })
        .catch(err => next(err));
});

route.get('/:id', (req, res, next) => {
    return ExpenseManager.getExpense(req.params.id, (err, data) => {
        if(err) {
            return next(err);
        }
        res.jsonp({
            data
        });
    });
});