"use strict";

const squel = require('squel');
const mysql = require('../../config/db').mysql;

module.exports = {
    /**
     * Get paginated list
     * @param options
     * @returns {Promise}
     */
    getUsers(options = {}) {
        return new Promise((resolve, reject) => {
            const query = squel
                .select()
                .from('users')
                .limit(10)
                .offset(options.offset || 0);

            mysql.connect()
                .then((connection) => {
                    connection.query(query.toString(), (err, results) => {
                        connection.release();
                        if(err) reject(err);
                        resolve(results);
                    });
                })
                .catch(err => reject(err));
        });
    },

    /**
     * Get User by id
     * @param id
     * @returns {Promise}
     */
    getUserById(id) {
        return new Promise((resolve, reject) => {
            const query = squel
                .select()
                .from('users')
                .where(`id = ${id}`)
                .limit(1);

            mysql.connect().then((connection) => {
                connection.query(query.toString(), (err, result) => {
                    connection.release();
                    if(err) reject(err);
                    resolve(result);
                })
            });
        });
    }
}