const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    username: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getUserSpiceInventory = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId)
  }),
};

const addToSpiceInventory = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId)
  }),
  body: Joi.object().keys({
    spiceId: Joi.required().custom(objectId),
    amount: Joi.number()
  })
};

const removeFromSpiceInventory = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
    spiceInventoryId: Joi.required().custom(objectId)
  })
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserSpiceInventory,
  addToSpiceInventory,
  removeFromSpiceInventory,
};
