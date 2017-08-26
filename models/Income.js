"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Income = new Schema({
    account_id: Number,
    amount: Number,
    created: Date,
    date: Date,
    hst_amount: Number,
    id: Number,
    income_account_id: Number,
    invoice_no: Number,
    issued_to: String,
    modified: Date,
    prorated_amount: Number,
    province_id: Number,
    user_entered_hst: Boolean,
    user_id: Number
});

module.exports = mongoose.model('Income', Income);