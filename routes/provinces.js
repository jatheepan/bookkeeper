"use strict";

const router = module.exports = require('express').Router();
const ProvinceManager = require('../lib/ProvinceManager');

router.get('/', (req, res, next) => {
    ProvinceManager.getProvinces()
        .then(provinces => {
            res.jsonp({
                success: true,
                data: provinces
            });
        })
        .catch(err => next(err));
});