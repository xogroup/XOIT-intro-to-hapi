# XOIT - Intro to hapi.js

## Next Step
Take a look at `src/helpers/joiSchemas.js` and `src/server.js` lines 38-40 to see how I added route validation.

Here we are going to explore Auth strategies in hapi.
Hapi allows you to define a standard authentication strategy which can then be easily applied across any number of routes on the server.

Complete the function found in `src/auth/`.
Then, use the [auth scheme](https://github.com/hapijs/hapi/blob/master/API.md#serverauthschemename-scheme) and [auth strategy](https://github.com/hapijs/hapi/blob/master/API.md#serverauthstrategyname-scheme-mode-options) methods to register a custom auth strategy in `src/server.js` and apply it to your `/todo` route.

## Solution
Go ahead and `git checkout 550a2913` to see how I chose to complete this step and to see what comes next!