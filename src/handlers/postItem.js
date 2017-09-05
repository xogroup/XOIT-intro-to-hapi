'use strict';

module.exports = function (request, reply) {

    // hapi automatically parses the request body into "request.payload"
    const result = request.payload;

    // hapi attaches a reference to the Server object (complete with methods) on "request.server"
    // Use your server method here and reply with the result
    return reply(result).code(201);
};
