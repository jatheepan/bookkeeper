"use strict";

const IncomeModel = require('../../models/Income');

function getIncomes(query = {}, options = {}) {
    const limit = options.limit || 10;
    const offset = options.offset || 0;
    return IncomeModel.paginate(query, {
        limit,
        offset,
        populate: ['_province'],
        lean: true
    });
}

function getIncomeById(id) {
    return new Promise((resolve, reject) => {
        IncomeModel.findOne({_id: id})
            .populate('_province')
            .exec((err, data) => {
            if(err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}

module.exports = {getIncomes, getIncomeById};