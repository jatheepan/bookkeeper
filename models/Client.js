"use strict";

const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    company_name: String,
    phone_number: String,
    street: String,
    address_line_2: String,
    city: String,
    postal_code: String,
    _province: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Province'
    },
    note: String,
    title: {
        type: String,
        enum: ['Mr.', 'Mrs.', 'Ms.']
    },
    user_id: Number,
    account_id: Number
});

Client.plugin(require('mongoose-paginate'));
module.exports = mongoose.model('Client', Client);
