"use strict";

const mongoose = require('mongoose');
require('./Province');

const income = new mongoose.Schema({
    account_id: Number,
    amount: Number,
    created: Date,
    date: Date,
    hst_amount: Number,
    income_account: {
        type: String,
        enum: [
            'Business Income',
            'Professional Income',
            'Rental Property Income',
            'Other Income',
            'Non Taxable Income'
        ],
        default: 'Business Income'
    },
    invoice_no: Number,
    issued_to: String,
    modified: {
        type: Date,
        default: Date.now
    },
    prorated_amount: Number,
    province_id: Number,
    _province: {
        type: mongoose.Schema.ObjectId,
        ref: 'Province'
    },
    user_entered_hst: Boolean,
    user_id: Number
});

income.plugin(require('mongoose-paginate'));
module.exports = mongoose.model('Income', income);