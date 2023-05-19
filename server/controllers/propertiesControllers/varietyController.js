const {Variety} = require('../../models/models');

class VarietyController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const variety = await Variety.create({name});
            res.status(201).json({variety});
        } catch (error) {
            res.status(500).json({error: 'Failed to add variety'});
        }
    }

    async getAll(req, res) {
        const variety = await Variety.findAll();
        return res.json(variety);
    }
}

module.exports = new VarietyController()