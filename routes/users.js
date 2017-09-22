"use strict";
const router = module.exports = require('express').Router();
const userManager = require('../lib/UserManager');


/* GET users listing. */
router.get('/', (req, res, next) => {
    userManager.getUsers()
        .then(results => res.jsonp({
            data: results.map(record => {
                record.id = record._id;
                delete record._id;
                record.type = 'users';
                return record;
            })
        }))
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    userManager.getUserById(req.params.id)
        .then(data => {
            data.id = data._id;
            data.type = 'users';
            res.jsonp({
                data
            });
        })
        .catch(err => next(err));
});

