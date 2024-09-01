const express = require('express');
const router = express.Router();
const CarbonData = require('../models/CarbonData');

router.post('/submit', async (req, res) => {
    try {
        const carbonData = new CarbonData({
            energyConsumed: req.body['energy-consumed'],
            fuelUsage: req.body['fuel-usage'],
            wasteProduction: req.body['waste'],
            coalExtractionRate: req.body['extraction-rate'],
            waterConsumption: req.body['water'],
            methaneEmission: req.body['chEmission'],
            transportEmission: req.body['transport'],
            explosive: req.body['explosion']
        });

        await carbonData.save();
        res.status(200).send('Data saved successfully!');
    } catch (error) {
        res.status(500).send('Error saving data');
    }
});

module.exports = router;