"use strict";

const mongoose = require('mongoose');

const ExpenseAccount = new mongoose.Schema({
    id: Number,
    title: String,
    is_hst: Boolean
});

module.exports = mongoose.model('ExpenseAccount', ExpenseAccount);