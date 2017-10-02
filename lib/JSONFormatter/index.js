"use strict";

module.exports = {
    _getAttributes(data) {
        let _data = Object.assign({}, data);
        const exclude = ['_id'];

        exclude.forEach(key => delete _data[key]);
        return _data;
    },

    _format(type, data) {
        return {
            type,
            id: data._id,
            attributes: this._getAttributes(data)
        };
    },

    format(type, result) {
        let data = {};
        if(Array.isArray(result)) {
            data = result.map(record => this._format(type, record))
        } else {
            data = this._format(type, result)
        }

        return {
            data
        }
    }
};