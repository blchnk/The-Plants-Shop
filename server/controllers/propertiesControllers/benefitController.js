const {Benefit} = require('../../models/models');

class BenefitController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const benefit = await Benefit.create({name});
            res.status(201).json(benefit);
        } catch (error) {
            res.status(500).json({error: 'Failed to add benefit'});
        }
    }

    async getAll(req, res) {
        const benefits = await Benefit.findAll();
        return res.json(benefits);
    }
}

module.exports = new BenefitController()