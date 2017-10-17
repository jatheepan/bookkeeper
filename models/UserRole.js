"use strict";

const mongoose = require('mongoose');

const UserRole = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('UserRole', UserRole);