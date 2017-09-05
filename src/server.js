'use strict';

const Hapi = require('hapi');

const AuthenticationScheme = require('./auth/authenticationScheme');
const Handlers = require('./handlers');
const Helpers = require('./helpers');

const port = process.env.port || 8000;

const server = new Hapi.Server();

// Set Connection
server.connection({ port });

// Register Authentication scheme
// Then use it to register an Authentication strategy

// Register Routes
server.route({
    method: 'GET',
    path: '/',
    handler: Handlers.home
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: Handlers.helloWorld
});

// Add your auth scheme to the route config
server.route({
    method: 'POST',
    path: '/todo',
    handler: Handlers.postItem,
    config: {
        validate: {
            payload: Helpers.joiSchemas.postItemSchema
        }
    }
});

// Start server if not being require()'ed
if (!module.parent) {
    server.start(() => {
        console.log(`Server started. Listening on port:${port}`)
    });
}

// Expose server
module.exports = server;
