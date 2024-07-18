const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const spiceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            index: true,
        },
        brand: {
            type: String,
        },
        form: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
spiceSchema.plugin(toJSON);
spiceSchema.plugin(paginate);

/**
 * @typedef Spice
 */
const Spice = mongoose.model('Spice', spiceSchema);

module.exports = Spice; 