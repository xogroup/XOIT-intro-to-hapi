# XOIT - Intro to hapi.js

## Next Step
If you want, take a look at `src/auth/`, `src/server.js` lines 17-19 and 47 to see how I implemented a basic Auth strategy.
In this step, we are going to register a server method to use in our request handler.
Server methods are typically used in our hapi.js servers to perform database writes and other data persistence operations.

I have created a basic function in `src/serverMethods/`. Register the method in `src/server.js` using the [server method api](https://github.com/hapijs/hapi/blob/master/API.md#servermethodname-method-options).
Then, utilize it in your `postItem` handler to bring the test coverage above the 95% threshold. 

## Solution
Go ahead and `git checkout a4a8a892` to see how I chose to complete this step and to see what comes next!