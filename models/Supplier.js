"use strict";

const mongoose = require('mongoose');

const Supplier = new mongoose.Schema({
    id: Number,
    title: String,
    user_id: Number,
    account_id: Number
});

module.exports = mongoose.model('Supplier', Supplier);