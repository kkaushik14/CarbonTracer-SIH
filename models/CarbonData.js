const mongoose = require('mongoose');

const CarbonDataSchema = new mongoose.Schema({
    energyConsumed: Number,
    fuelUsage: Number,
    wasteProduction: Number,
    coalExtractionRate: Number,
    waterConsumption: Number,
    methaneEmission: Number,
    transportEmission: Number,
    explosive: Number
});

const CarbonData = mongoose.model('CarbonData', CarbonDataSchema);

module.exports = CarbonData;