# XOIT - Intro to hapi.js

## Next Step
Take a look at `src/handlers/` and `src/server.js` lines 29-34 to see how I registered routes and hooked up the handlers.

Then let's take a shot at the most basic security step: request data validation.
Hapi makes request validation a specific step in the request lifecycle, performing the prescribed checks before ever handing the request off to the handler.

I've created a sample payload schema in `src/helpers/joiSchemas.js`.
Use hapi's `validate` [route option](https://github.com/hapijs/hapi/blob/master/API.md#route-options) to hook up this schema to your `/todo` endpoint.

## Solution
Go ahead and `git checkout fb07c85b` to see how I chose to complete this step and to see what comes next!