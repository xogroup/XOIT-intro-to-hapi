'use strict';

const Hoek = require('hoek');
const Helpers = require('../helpers');

const defaultItem = {
    privateIdentifier: 'Ay_No_This_Is_A_Secret'
};

module.exports = function (request, reply) {

    // hapi automatically parses the request body into "request.payload"
    const result = Hoek.applyToDefaults(defaultItem, request.payload);

    // hapi attaches a reference to the Server object (complete with methods) on "request.server"
    return request.server.methods.save(result)
        .then(() => {

            const responseValidation = Helpers.joiSchemas.responseSchema.validate(result);

            return reply(responseValidation.value).code(201);
        });
};
