'use strict';

module.exports = function (request, reply) {

    // hapi automatically parses the request body into "request.payload"
    const result = request.payload;

    return reply(result).code(201);
};
