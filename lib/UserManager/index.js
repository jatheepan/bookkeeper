"use strict";

const UserModel = require('../../models/User');

/**
 * Get paginated list
 * @param options
 * @returns {Promise}
 */
function getUsers(query = {}, options = {}) {
    const limit = options.limit || 10;
    const offset = options.offset || 0;
    return new Promise((resolve, reject) => {
        UserModel.find(query).populate('user_role').lean().exec((err, data) => {
            if(err) {
                return reject(err);
            }
            resolve(data);
        });
    })
}

/**
 * Get User by id
 * @param id
 * @returns {Promise}
 */
function getUserById(id) {
    return new Promise((resolve, reject) => {
        UserModel
            .findOne({_id: id})
            .populate('user_role')
            .lean()
            .exec((err, data) => {
                if(err) {
                    return reject(err);
                }
                resolve(data);
            });
    });
}

module.exports = {getUsers, getUserById};