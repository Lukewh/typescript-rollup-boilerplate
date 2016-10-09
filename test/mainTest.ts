/// <reference path="../typings/index.d.ts" />

import chai = require('chai');
import main from '../src/ts/main';

const expect = chai.expect;

describe('Main', function () {
    describe('.sayHi', function () {
        it('returns a string', function () {
            let hi = main.sayHi('Dave');
            expect(hi).to.be.a('string');
        });
    });
});