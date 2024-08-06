const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSpice = {
  body: Joi.object().keys({
    name: Joi.string(),
    brand: Joi.string(),
    form: Joi.string(),
  }),
};

const getSpices = {
  query: Joi.object().keys({
    name: Joi.string(),
    brand: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    sortBy: Joi.string()
  }),
};

const getBrands = {
};

const getSpice = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId)
  }),
};

const updateSpice = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      brand: Joi.string(),
      form: Joi.string(),
    })
    .min(1),
};

const deleteSpice = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};


module.exports = {
  createSpice,
  getSpices,
  getSpice,
  updateSpice,
  deleteSpice,
  getBrands,
};
