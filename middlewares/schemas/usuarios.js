const Joi = require('@hapi/joi');

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required(),
        pass: Joi.string().min(3).max(20).required(),
    }),
    registro: Joi.object().keys({
        username: Joi.string().required(),
        pass: Joi.string().min(3).max(20).required(),
        mail: Joi.string().email().required(),
        telefono: Joi.number().required(),
        })
}

module.exports = {schemas};