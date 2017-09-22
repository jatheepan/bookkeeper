"use strict";

const mongoose = require('mongoose');

const User = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    password: String,
    package_id: Number,
    status: Number,
    user_role_id: Number
});

User.plugin(require('mongoose-paginate'));
module.exports = mongoose.model('User', User);