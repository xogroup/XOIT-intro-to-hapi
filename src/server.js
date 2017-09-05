'use strict';

const Hapi = require('hapi');

const Handlers = require('./handlers');

const port = process.env.port || 8000;

const server = new Hapi.Server();

// Set Connection
server.connection({ port });

// Register Routes
server.route({
    method: 'GET',
    path: '/',
    handler: Handlers.home
});

server.route({
    method: 'GET',
    path: '/hello'
});

// Add a POST /todo route, and hook up the 'postItem' handler

// Start server if not being require()'ed
if (!module.parent) {
    server.start(() => {
        console.log(`Server started. Listening on port:${port}`)
    });
}

// Expose server
module.exports = server;
