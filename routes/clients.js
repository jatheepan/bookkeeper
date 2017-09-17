"use strict";

const route = module.exports = require('express').Router();
const ClientManager = require('../lib/ClientManager');

route.get('/', (req, res, next) => {
    ClientManager.getClients()
        .then(result => {
            result.data = result.docs;
            delete result.docs;
            res.jsonp(result);
        })
        .catch(err => next(err));
});

route.get('/:id', (req, res, next) => {
    return ClientManager.getClientById(req.params.id)
        .then(result => {
            res.jsonp({
                data: result
            });
        })
        .catch(err => next(err));
});