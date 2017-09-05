'use strict';

const Lab = require('lab');
const Superagent = require('superagent');
const Server = require('../src/server');

const lab = exports.lab = Lab.script();
const before = lab.before;
const describe = lab.describe;
const it = lab.it;
const expect = lab.expect;

describe('Server', () => {

    before((done) => {

        Server.start(done);
    });

    it('should listen on port 8000', (done) => {

        Superagent.get('localhost:8000')
            .end((err, res) => {

                expect(err).to.be.null();
                expect(res.statusCode).to.equal(200);

                done();
            });
    });
});
