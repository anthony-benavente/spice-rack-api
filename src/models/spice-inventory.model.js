const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { Spice } = require('./');

const spiceInventorySchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        spices: [{
            spice: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spice'
            },
            amount: Number
        }],
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
spiceInventorySchema.plugin(toJSON);
spiceInventorySchema.plugin(paginate);

/**
 * @typedef Spice
 */
const SpiceInventory = mongoose.model('SpiceInventory', spiceInventorySchema);

module.exports = SpiceInventory; 