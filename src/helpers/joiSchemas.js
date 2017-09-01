'use strict';

const Joi  = require('joi');

module.exports = {
    postItemSchema: Joi.object().keys({
        title: Joi.string().required(),
        isComplete: Joi.boolean().default(false)
    }),
    responseSchema: Joi.object().keys({
        title: Joi.string().required(),
        isComplete: Joi.boolean().default(false)
    }).options({ stripUnknown: true })
};
