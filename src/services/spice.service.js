const httpStatus = require('http-status');
const { Spice } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a spice
 * @param {Object} spiceBody
 * @returns {Promise<Spice>}
 */
const createSpice = async (spiceBody) => {
  return Spice.create(spiceBody);
};

/**
 * Query for spices
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySpices = async (filter, options) => {
  const spices = await Spice.paginate(filter, options);
  return spices;
};

/**
 * Get spice by id
 * @param {ObjectId} id
 * @returns {Promise<Spice>}
 */
const getSpiceById = async (id) => {
  return Spice.findById(id);
};

/**
 * Get spice by email
 * @param {string} email
 * @returns {Promise<Spice>}
 */
const getSpiceByName = async (name) => {
  return Spice.findOne({ name });
};

/**
 * Update spice by id
 * @param {ObjectId} spiceId
 * @param {Object} updateBody
 * @returns {Promise<Spice>}
 */
const updateSpiceById = async (spiceId, updateBody) => {
  const spice = await getSpiceById(spiceId);
  if (!spice) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Spice not found');
  }
  Object.assign(spice, updateBody);
  await spice.save();
  return spice;
};

/**
 * Delete spice by id
 * @param {ObjectId} spiceId
 * @returns {Promise<Spice>}
 */
const deleteSpiceById = async (spiceId) => {
  const spice = await getSpiceById(spiceId);
  if (!spice) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Spice not found');
  }
  await spice.remove();
  return spice;
};

module.exports = {
  createSpice,
  querySpices,
  getSpiceById,
  getSpiceByName,
  updateSpiceById,
  deleteSpiceById,
};
