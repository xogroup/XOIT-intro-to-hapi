'use strict';

const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const AuthenticationScheme = require('./auth/authenticationScheme');
const Handlers = require('./handlers');
const Helpers = require('./helpers');
const ServerMethods = require('./serverMethods');

const port = process.env.port || 8000;

const server = new Hapi.Server();

// Set Connection
server.connection({ port });

// Register Authentication strategy
server.auth.scheme('authScheme', AuthenticationScheme);
server.auth.strategy('defaultScheme', 'authScheme');

// Register Sever Methods
for (const method in ServerMethods) {
    server.method(method, ServerMethods[method], { callback: false });
}

// Register Plugins
// Inert, Vision, and HapiSwagger are all for registering the "/documentation" route on the server.
server.register(Inert, () => {});
server.register(Vision, () => {});
server.register(HapiSwagger, () => {});

// Register Routes
server.route({
    method: 'GET',
    path: '/',
    handler: Handlers.home,
    config: {
        description: 'Celebrate',
        tags: ['api']
    }
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: Handlers.helloWorld,
    config: {
        description: 'Hello World',
        tags: ['api']
    }
});

server.route({
    method: 'POST',
    path: '/todo',
    handler: Handlers.postItem,
    config: {
        description: 'Post a TODO item',
        tags: ['api'],
        validate: {
            payload: Helpers.joiSchemas.postItemSchema
        },
        auth: 'defaultScheme'
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
