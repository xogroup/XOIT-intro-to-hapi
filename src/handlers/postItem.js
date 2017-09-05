'use strict';

const Hoek = require('hoek');
// require new modules here, like your ../helpers index ;)

const defaultItem = {
    privateIdentifier: 'Ay_No_This_Is_A_Secret'
};

module.exports = function (request, reply) {

    // hapi automatically parses the request body into "request.payload"
    const result = Hoek.applyToDefaults(defaultItem, request.payload);

    // hapi attaches a reference to the Server object (complete with methods) on "request.server"
    return request.server.methods.save(result)
        .then(() => {

            // Use a Joi schema in your helper file to stripUnknown keys from your result before replying!

            return reply(/*validation result*/).code(201);
        });
};
