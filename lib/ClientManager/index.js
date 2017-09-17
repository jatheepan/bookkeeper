"use strict";

const ClientModel = require('../../models/Client');

function getClients(query = {}, options = {}) {
    const limit = options.limit || 10;
    const offset = options.offset || 0;

    return ClientModel.paginate(query, {
        limit,
        offset,
        lean: true
    });
}

function getClientById(id) {
    return new Promise((resolve, reject) => {
        ClientModel.findOne({_id: id}, (err, data) => {
            if(err) {
                return reject(err);
            }
            resolve(data);
        });
    });

}

module.exports = {getClients, getClientById};
