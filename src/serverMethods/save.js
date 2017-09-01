'use strict';

module.exports = function (document) {

    // Server methods are typically DB-writing functions.
    // This is just to show you how to register and call one.
    return Promise
        .resolve(document);
};
