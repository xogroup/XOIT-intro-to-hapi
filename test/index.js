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

    it('should have a GET /hello endpoint', (done) => {

        Superagent.get('localhost:8000/hello')
            .end((err, res) => {

                expect(err).to.be.null();
                expect(res.statusCode).to.equal(200);
                expect(res.text).to.equal('World');

                done();
            });
    });

    describe('POST /todo', () => {

        it('should have a POST /todo endpoint', (done) => {

            Superagent.post('localhost:8000/todo')
                .end((err, res) => {

                    expect(res.statusCode).to.not.equal(404);

                    done();
                });
        });

        it('should reply with the new TODO item', (done) => {

            Superagent.post('localhost:8000/todo')
                .send({ title: 'Item 1' })
                .end((err, res) => {

                    expect(err).to.be.null();
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.equal({ title: 'Item 1' });

                    done();
                });
        });
    });
});
