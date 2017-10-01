"use strict";

function JSONFormatter(payload) {
    if(Array.isArray(payload)) {
        return {
            data: payload.map(record => {
                record.id = record._id;
                delete record._id;
                record.type = 'users';
                record.attributes = {
                    first_name: record.first_name,
                    last_name: record.last_name,
                    username: record.username,
                    email: record.email
                }
                return record;
            })
        }
    } else {
        const data = {
            id: payload._id,
            type: 'users',
            attributes: {
                first_name: payload.first_name,
                last_name: payload.last_name,
                username: payload.username,
                email: payload.email
            }
        }
        return {data};
    }
}

module.exports = JSONFormatter;