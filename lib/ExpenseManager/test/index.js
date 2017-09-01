"use strict";

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

const Manager = require('../index');
const ExpenseModel = require('../../../models/Expense');

chai.use(sinonChai);

describe('Unit testing for ExpenseManager', () => {
    const record = {
        "_id": "59a33a49a0433921b479d398",
        "__v": 0,
        "date": "2013-11-21T05:00:00Z",
        "issued_by": "Chatr",
        "invoice_no": 1,
        "amount": 22.6,
        "prorated_amount": 22.6,
        "hst_amount": 2.6,
        "user_entered_hst": 0,
        "created": "2014-02-27T14:19:55Z",
        "modified": "2014-02-27T14:19:55Z",
        "user_id": 15,
        "account_id": 33,
        "expense_type_id": 1,
        "expense_account_id": 15,
        "pf_expense_account_id": 15
    };

    beforeEach(done => {
        sinon.stub(ExpenseModel, 'findOne').yields(null, record);
        done();
    });

    afterEach(done => {
        ExpenseModel.findOne.restore();
        done();
    });

    describe('getExpense()', () => {
        it('should call once', done => {
            const callback = sinon.spy(() => {
                expect(callback).to.have.been.calledOnce;
                expect(callback).to.have.been.calledWith(null, record);
            });
            Manager.getExpense('59a33a49a0433921b479d398', callback);

            done();
        });
    });
});