# XOIT - Intro to hapi.js

## Next Step
Let's utilize Joi to validate more than just a request.

We know what data is coming IN to our POST route, but what if we are utilizing that data to hydrate a more complicated model, including private information that we don't want to be exposing to the outside world??

We can take advantage of the [options](https://github.com/hapijs/joi/blob/master/API.md#anyoptionsoptions) feature of Joi to `stripUnknown` and ensure that we are only sending back the exact set of properties that we *choose* to reply with.


First, create a new Joi schema that models the response that you expect to send back. In this case, it will probably look a lot like your request schema; we just want to make sure we aren't sending back any private info, like some `privateIdentifier`s!

Then, head over to your `postItem.js` handler and add some Joi validation to strip the extra keys off of your result object; use that to send back to the client.

## Solution
Go ahead and `git checkout 5a13dd85` to see how I chose to complete this step and to see what comes next!