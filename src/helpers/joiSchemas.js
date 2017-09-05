'use strict';

const Joi  = require('joi');

module.exports = {
    postItemSchema: Joi.object().keys({
        title: Joi.string().required(),
        isComplete: Joi.boolean().default(false)
    }),
    responseSchema: Joi.any() // Create a new schema for your response. Utilize the `stripUnknown` option to remove excess properties without erroring out
};
