"use strict";

const squel = require('squel');
const mysql = require('../../config/db').mysql;
const IncomeModel = require('../../models/Income');

module.exports = {
    getIncomes(query = {}, options = {}) {
        const limit = options.limit || 10;
        const offset = options.offset || 0;
        return IncomeModel.paginate(query, {
            limit,
            offset,
            populate: ['_province']
        });
    }
};