"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const province = new Schema({
    hst: Number,
    title: String
});

module.exports = mongoose.model('Province', province);