"use strict";

const mongoose = require('mongoose');

const Expense = new mongoose.Schema({
    date: Date,
    issued_by: String,
    invoice_no: Number,
    amount: Number,
    prorated_amount: Number,
    hst_amount: Number,
    user_entered_hst: Number,
    _province: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Province'
    },
    user_id: Number,
    account_id: Number,
    expense_type_id: Number,
    expense_account_id: Number,
    pf_expense_account_id: Number,
    created: Date,
    modified: Date
});

Expense.plugin(require('mongoose-paginate'));
module.exports = mongoose.model('Expense', Expense);