"use strict";

const router = module.exports = require('express').Router();
const SuppliersModel = require('../models/Supplier');

router.get('/', (req, res, next) => {
    SuppliersModel.find({}, (err, data) => {
        res.jsonp({
            data
        });
    })
});
