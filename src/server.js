'use strict';

const Hapi = require('hapi');

const Handlers = require('./handlers');

const port = process.env.port || 8000;

// Instantiate a new server object

// Set a connection on your server

server.route({
    method: 'GET',
    path: '/',
    handler: Handlers.home
});

// Start server if not being require()'ed
if (!module.parent) {}

// Expose server
module.exports = server;
