# XOIT - Intro to hapi.js

Welcome to XO Group's Intro to hapi.js repo.
This short assignment was originally designed for a 40 minute guided XOIT session, but please feel free to work through the tasks regardless of how you arrived here.

First, some basic information. You'll want to open the [hapi.js API documentation](https://github.com/hapijs/hapi/blob/master/API.md) for reference throughout the tasks.
To advance, run the `git checkout` command at the bottom of this document, and the poke around the files to see how I chose to implement the solution for the previous step. In many cases, these aren't the *only* ways to accomplish a goal in hapi, but reflect the practices and patterns we use here at XO.
Then, update your dependencies with any new packages I may have added by running `npm install`, and check out the state of the test suite by running `npm test`.
Finally, refer to the instructions found in this file to see what the next goals are and to find any reference documentation, and add your code to the relevant files to make the tests pass!
Note that while you certainly *can*, you shouldn't need to modify the `test/index.js` file. I created the test setup so that you can focus on acclimating yourself to the hapi.js API.

Ready? Let's get started.

First things first, you'll need to head into `src/server.js` and instantiate a new hapi server object. Then, set up a connection to listen on our specified port.
I've already created a basic route so that you can tell when you have a properly-configured server instance.
The last step is to get your server started up and listening for requests! You'll notice I set up a condition around the presence of `module.parent` - more on this in a moment, for now just put your [server start](https://github.com/hapijs/hapi/blob/master/API.md#serverstartcallback) method inside of the indicated block and run `npm test` to check your work.

"1 test complete"? Good! You're well on your way!

Now, to address a couple of weird things I've done in the `server.js` file:
1. `const port = process.env.port || 8000;` - we could have just specified a port, but there are cases where your deployment strategy may have an impact on which port your server must listen on. This is a common practice for determining a dynamic port, with a safe fallback.
2. `if (!module.parent)` - the Node.js `module`... module... is part of the `require()` code path. We can use this to differentiate server behavior based on whether or not your server has been `require()`d  into another module, as we are doing in the test suite.
This allows us to have 2 different ways to start up our server and make requests. The first is what you've already done - `npm test`. The second is how you would start the server in a real-life scenario: `npm start`.
Go ahead and try running `npm start`, and then visit [localhost:8000/](localhost:8000/) in the browser of your choice to check it out! Your should have a real live running server!


## Solution
Now let's `git checkout 850a0e4d` to see how I chose to complete this step and to see what comes next!