'use strict';

module.exports = function (request, reply) {

    // hapi automatically parses the request body into "request.payload"

    return reply(/*response data*/).code(/*integer HTTP status code*/);
};
