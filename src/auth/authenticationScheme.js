'use strict';

const Boom = require('boom');
const Joi  = require('joi');

module.exports = (server, options) => {

    return {
        authenticate: function (request, reply) {

            const token = request.headers.authentication;

            if (!token) {
                return reply(Boom.unauthorized());
            }

            // Just using a Joi schema as our example Authentication function. Please don't do *only* this in reality.
            Joi.string().guid().validate(token, (err, value) => {

                if (err !== null) {
                    return reply(Boom.unauthorized());
                }

                return reply.continue({
                    credentials: value
                });
            });
        }
    };
};
