# XOIT - Intro to hapi.js

## Next Step
Now that your test suite is finished, and you've set up your API routes, let's take a look at some community plugins to generate some Swagger documentation for your shiny new server.

Use npm to `npm install --save hapi-swagger inert vision` to add the packages to your project.

Next, `require` those three modules into your `server.js` and utilize hapi's [plugin registration api](https://github.com/hapijs/hapi/blob/master/API.md#serverregisterplugins-options-callback) to set them up on your server.

Here's what each of the three is doing for us:
1. [inert](https://github.com/hapijs/inert) - Handles serving up static files and directories.
2. [vision](https://github.com/hapijs/vision) - Renders templated views to be served up as static files.
3. [hapi-swagger](https://github.com/glennjones/hapi-swagger) - Compiles route-specific information from your server and generates a templated view to be served up by vision/inert.

Now that the plugins are registered, we need to provide hapi-swagger with the information about our routes.
On each route declaration, add the `description` and `tags` config properties.
Then, `npm start` your server and visit `localhost:8000/documentation` to check out your Swagger documentation!

## Solution
Go ahead and `git checkout 4a74ee745` to see how I chose to complete this step.