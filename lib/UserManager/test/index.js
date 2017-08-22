"use strict";

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const mysql = require('../../../config/db').mysql;
const userManager = require('../index');
chai.use(sinonChai);

const fakeData = [{
    "data": [
        {
            "clear_password": "testing",
            "created": "2013-08-19T20:44:14.000Z",
            "email": "admin@easyhst.ca",
            "first_name": "Easy",
            "id": 1,
            "last_access": "2015-01-17T15:02:53.000Z",
            "last_login": "2014-06-15T08:11:20.000Z",
            "last_name": "HST",
            "modified": "2015-01-17T15:02:53.000Z",
            "package_id": 0,
            "password": "541f23b9de6627e9497807455997225e90cc7ce7",
            "status": 1,
            "user_role_id": 1,
            "username": "admin"
        }
    ],
    "success": true
}];

describe('userManager', () => {
    beforeEach((done) => {
        const stub = sinon.stub(mysql, 'connect');
        stub.resolves(fakeData);
        done();
    });

    afterEach((done) => {
        mysql.connect.restore();
        done();
    });

    describe('getUsers()', () => {
        it('Should have data and success', done => {
            mysql.connect()
                .then(payload => {
                    expect(payload[0]).to.have.all.keys('data', 'success');
                });
            done();
        });

        it('Should return Promise', (done) => {
            expect(userManager.getUsers()).to.be.an.instanceOf(Promise);
            done();
        });
    });

    describe('getUserById()', () => {
        it('Should return Promise', (done) => {
            expect(userManager.getUserById(1)).to.be.an.instanceOf(Promise);
            done();
        });
    });
});