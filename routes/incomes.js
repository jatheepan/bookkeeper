"use strict";

const mongoose = require('mongoose');
const squel = require('squel');
const mysql = require('../config/db').mysql;
const IncomeManager = require('../lib/IncomeManager');

const router = module.exports = require('express').Router();
const IncomeModel = require('../models/Income');

router.get('/', (req, res, next) => {
    IncomeManager.getIncomes()
        .then(incomes => {
            (incomes || []).forEach(income => {
                income.user_entered_hst = !!income.user_entered_hst;
            });
            res.jsonp({
                success: true,
                data: incomes
            });
        })
        .catch(err => next(err));
});