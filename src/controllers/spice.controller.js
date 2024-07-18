const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { spiceService } = require('../services');

const createSpice = catchAsync(async (req, res) => {
  const spice = await spiceService.createSpice(req.body);
  res.status(httpStatus.CREATED).send(spice);
});

const getSpices = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['limit', 'page', 'sortBy']);
  const result = await spiceService.querySpices(filter, options);
  res.send(result);
});

const getSpice = catchAsync(async (req, res) => {
  const spice = await spiceService.getSpiceById(req.params.id);
  if (!spice) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Spice not found');
  }
  res.send(spice);
});

const updateSpice = catchAsync(async (req, res) => {
  const spice = await spiceService.updateSpiceById(req.params.id, req.body);
  res.send(spice);
});

const deleteSpice = catchAsync(async (req, res) => {
  await spiceService.deleteSpiceById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSpice,
  getSpice,
  getSpices,
  updateSpice,
  deleteSpice,
};
