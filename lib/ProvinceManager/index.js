"use strict";

const squel = require('squel');
const mysql = require('../../config/db').mysql;

function getProvinces() {
    const query = squel.select().from('provinces');

    return new Promise((resolve, reject) => {
        mysql
            .connect()
            .then(connection => {
                connection.query(query.toString(), (err, provinces) => {
                    connection.release();
                    if(err) {
                        return reject(err);
                    }
                    resolve(provinces);
                });
            })
            .catch(err => reject(err));
    });
}

function getProvinceById() {

}

module.exports = {getProvinces, getProvinceById};