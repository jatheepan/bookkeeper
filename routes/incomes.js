"use strict";

const mongoose = require('mongoose');
const squel = require('squel');
const mysql = require('../config/db').mysql;
const IncomeManager = require('../lib/IncomeManager');

const router = module.exports = require('express').Router();
const IncomeModel = require('../models/Income');

router.get('/', (req, res, next) => {
    IncomeManager.getIncomes()
        .then(result => {
            result.data = result.docs;
            result.success = true;
            delete result.docs;
            res.jsonp(result);
        })
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    IncomeManager.getIncomeById(req.params.id)
        .then(data => res.jsonp({data}))
        .catch(err => next(err));
});

